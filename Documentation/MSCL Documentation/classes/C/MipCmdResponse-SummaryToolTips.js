NDSummary.OnToolTipsLoaded("CClass:MipCmdResponse",{1787:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1787\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipCmdResponse</div></div></div><div class=\"TTSummary\">Represents the response to a generic InertialNode command</div></div>",1789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1789\" class=\"NDPrototype NoParameterForm\">MipCmdResponse()</div><div class=\"TTSummary\">Creates a MipCmdResponse with default values</div></div>",1790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1790\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipCmdResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ResponsePattern::</td><td class=\"PType\">State&nbsp;</td><td class=\"PName last\">state,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">success,</td></tr><tr><td class=\"PModifierQualifier first\">MipPacket::</td><td class=\"PType\">MipAckNack&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cmdName</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipCmdResponse with the given parameters</div></div>",1792:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1792\" class=\"NDPrototype NoParameterForm\">ResponsePattern::State m_responseState</div><div class=\"TTSummary\">The state of the response, which determines which exceptions are thrown, if any</div></div>",1793:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1793\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_success</div><div class=\"TTSummary\">Whether or not the response was a success</div></div>",1794:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1794\" class=\"NDPrototype NoParameterForm\">MipPacket::MipAckNack m_ackNack</div><div class=\"TTSummary\">The MIP ack/nack that was received with the packet</div></div>",1795:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1795\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_commandName</div><div class=\"TTSummary\">The name of the command that this response corresponds to (to be used in error descriptions)</div></div>",1797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1797\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> throwIfFailed()</div><div class=\"TTSummary\">Throws an exeption if the response was a failure.</div></div>",1798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1798\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> success() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the command was a success.</div></div>",1799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1799\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipPacket::MipAckNack errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MIP ack/nack error code that was returned</div></div>"});