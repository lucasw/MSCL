#########################################################################################################################################################
# The purpose of this script is to build zip files from MSCL for the host windows OS, but inside a container as to not pollute the host with dependencies
#########################################################################################################################################################

# Get arguments from the user
param (
  [String]$windows_image,
  [String]$windows_version
)

# Update this variable to change the python versions to build MSCL with
$python3_versions = "3.5.0 3.6.0 3.7.0 3.8.0 3.9.0 3.10.0"

# Determine some information about windows an the PC so we can run the right docker image
if (-not ${windows_image}) {
  $product_type = (Get-WmiObject -Class Win32_OperatingSystem).ProductType
  if (${product_type} -eq 1) {
       $windows_image = "mcr.microsoft.com/windows"
  } else {
       $windows_image = "mcr.microsoft.com/windows/servercore"
  }
}
if (-not ${windows_version}) {
  $windows_version = (Get-ComputerInfo).WindowsVersion
}

# Determine how much resources we can provide the docker container
$num_cpus = (Get-CimInstance Win32_ComputerSystem).NumberOfLogicalProcessors
$memory = (Get-CimInstance Win32_PhysicalMemory | Measure-Object -Property capacity -Sum).sum /1gb

# Find the script directory and set some constants
$script_dir = $PSScriptRoot
$project_dir = "${script_dir}/.."
$dockerfile = "${script_dir}/Dockerfile.windows"
$image_name = "microstrain/mscl_windows_builder:${windows_version}"

# Construct the flags that we will pass to the build script
$python2_x86_build_script_flags = "-python2Dirs_x86 C:\Python2.7-Win32"
$python2_x64_build_script_flags = "-python2dirs_x64 C:\Python2.7-x64"
$python3_x86_build_script_flags = "-python3Dirs_x86 "
$python3_x64_build_script_flags = "-python3Dirs_x64 "
foreach ($python3_version in ${python3_versions}.split(" ")) {
  $python3_x86_build_script_flags += "C:\Python${python3_version}-Win32,"
  $python3_x64_build_script_flags += "C:\Python${python3_version}-x64,"
}
$python3_x86_build_script_flags = $python3_x86_build_script_flags.TrimEnd(',')
$python3_x64_build_script_flags = $python3_x64_build_script_flags.TrimEnd(',')
$python_build_script_flags = "${python3_x86_build_script_flags} ${python3_x64_build_script_flags} ${python2_x86_build_script_flags} ${python2_x64_build_script_flags}"

# Build the image
docker build `
  -t "${image_name}" `
  -f "${dockerfile}" `
  --build-arg WINDOWS_VERSION="${windows_version}" `
  --build-arg PYTHON3_VERSIONS="${python3_versions}" `
  "${project_dir}"
if (-not $?) {
  exit $?
}

# Run the build
docker run `
  -it `
  --rm `
  --cpus="${num_cpus}" `
  --memory="${memory}g" `
  -v "${project_dir}:C:\Projects\MSCL" `
  -w "C:\DockerTemp\build" `
  "${image_name}" -Command " `
    git config --global --add safe.directory C:/projects/mscl/; `
    & 'C:\Projects\MSCL\BuildScripts\jenkins_win.ps1' -buildDir C:\DockerTemp\build ${python_build_script_flags}; `
  "
if (-not $?) {
  exit $?
}