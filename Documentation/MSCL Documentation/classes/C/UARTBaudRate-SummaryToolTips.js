NDSummary.OnToolTipsLoaded("CClass:UARTBaudRate",{473:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype473\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UARTBaudRate</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial UARTBaudRate command.</div></div>",475:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype475\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",476:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype476\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UARTBaudRate MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The uint32 object to set.</div></div>",477:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype477\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> UARTBaudRate MakeGetCommand()</div></div>",478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype478\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype479\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> peekParameterValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandBytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Read the baud rate parameter value from the provided UART Baud Rate command bytes.&nbsp; Note: The provided command bytes are assumed to be formatted properly, no validation occurs.</div></div>",480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype480\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",481:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a UARTBaudRate object.&nbsp; Use Make___Command methods to create an object.</div></div>",482:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype482\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype483\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype484\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",486:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype486\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",487:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype487\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The uint32 to send to the device.</div></div>"});