NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/AdaptiveMeasurement.h",{964:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype964\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">AdaptiveMeasurement</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial Adaptive Measurement commands: Gravity Magnitude Error Adaptive Measurement, Magnetometer Magnitude Error Adaptive Measurement, and Magnetometer Dip Angle Error Adaptive Measurement.</div></div>",966:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype966\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",967:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype967\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdaptiveMeasurement MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">AdaptiveMeasurementData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",968:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype968\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> AdaptiveMeasurement MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",969:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype969\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AdaptiveMeasurementData getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",970:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype970\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",971:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a AdaptiveMeasurement object.&nbsp; Use Make___Command methods to create an object.</div></div>",972:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype972\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",973:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype973\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",974:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype974\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",976:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype976\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",977:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype977\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",978:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The uint8 to send to the device.</div></div>"});