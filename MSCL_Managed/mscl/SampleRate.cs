//------------------------------------------------------------------------------
// <auto-generated />
//
// This file was automatically generated by SWIG (http://www.swig.org).
// Version 4.0.0
//
// Do not make changes to this file unless you know what you are doing--modify
// the SWIG interface file instead.
//------------------------------------------------------------------------------

namespace mscl {

public class SampleRate : global::System.IDisposable {
  private global::System.Runtime.InteropServices.HandleRef swigCPtr;
  protected bool swigCMemOwn;

  internal SampleRate(global::System.IntPtr cPtr, bool cMemoryOwn) {
    swigCMemOwn = cMemoryOwn;
    swigCPtr = new global::System.Runtime.InteropServices.HandleRef(this, cPtr);
  }

  internal static global::System.Runtime.InteropServices.HandleRef getCPtr(SampleRate obj) {
    return (obj == null) ? new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero) : obj.swigCPtr;
  }

  ~SampleRate() {
    Dispose(false);
  }

  public void Dispose() {
    Dispose(true);
    global::System.GC.SuppressFinalize(this);
  }

  protected virtual void Dispose(bool disposing) {
    lock(this) {
      if (swigCPtr.Handle != global::System.IntPtr.Zero) {
        if (swigCMemOwn) {
          swigCMemOwn = false;
          msclPINVOKE.delete_SampleRate(swigCPtr);
        }
        swigCPtr = new global::System.Runtime.InteropServices.HandleRef(null, global::System.IntPtr.Zero);
      }
    }
  }

  public SampleRate() : this(msclPINVOKE.new_SampleRate__SWIG_0(), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public SampleRate(SampleRate.RateType type, uint samples) : this(msclPINVOKE.new_SampleRate__SWIG_1((int)type, samples), true) {
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
  }

  public override string ToString() {
    string ret = msclPINVOKE.SampleRate_ToString(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public string prettyStr() {
    string ret = msclPINVOKE.SampleRate_prettyStr(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public TimeSpan samplePeriod() {
    TimeSpan ret = new TimeSpan(msclPINVOKE.SampleRate_samplePeriod(swigCPtr), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public double samplesPerSecond() {
    double ret = msclPINVOKE.SampleRate_samplesPerSecond(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public SampleRate.RateType rateType() {
    SampleRate.RateType ret = (SampleRate.RateType)msclPINVOKE.SampleRate_rateType(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public uint samples() {
    uint ret = msclPINVOKE.SampleRate_samples(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public WirelessTypes.WirelessSampleRate toWirelessSampleRate() {
    WirelessTypes.WirelessSampleRate ret = (WirelessTypes.WirelessSampleRate)msclPINVOKE.SampleRate_toWirelessSampleRate(swigCPtr);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public ushort toDecimation(ushort sampleRateBase) {
    ushort ret = msclPINVOKE.SampleRate_toDecimation(swigCPtr, sampleRateBase);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate Hertz(uint samplesPerSecond) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_Hertz(samplesPerSecond), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate KiloHertz(uint kSamplesPerSecond) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_KiloHertz(kSamplesPerSecond), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate Seconds(uint secondsBetweenSamples) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_Seconds(secondsBetweenSamples), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate Event() {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_Event(), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate Decimation(uint rateDecimation) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_Decimation(rateDecimation), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate FromWirelessEepromValue(WirelessTypes.WirelessSampleRate eepromValue) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_FromWirelessEepromValue((int)eepromValue), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public static SampleRate FromInertialRateDecimationInfo(ushort baseRate, ushort rateDecimation) {
    SampleRate ret = new SampleRate(msclPINVOKE.SampleRate_FromInertialRateDecimationInfo(baseRate, rateDecimation), true);
    if (msclPINVOKE.SWIGPendingException.Pending) throw msclPINVOKE.SWIGPendingException.Retrieve();
    return ret;
  }

  public enum RateType {
    rateType_seconds = 0,
    rateType_hertz = 1,
    rateType_event = 2,
    rateType_decimation = 3
  }

}

}
