NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/WirelessResponsePattern.h",{2243:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2243\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessResponsePattern</div></div></div><div class=\"TTSummary\">A pattern matching the expected response from a wireless command.</div></div>",2245:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2245\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> WirelessResponsePattern(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">commandId,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessResponsePattern attached to a collector.</div></div>",2246:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2246\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~WirelessResponsePattern()</div><div class=\"TTSummary\">Destroys the ResponsePattern and unregisters this response from its ResponseCollector</div></div>",2248:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2248\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_commandId</div><div class=\"TTSummary\">The command ID to match in the response.</div></div>",2249:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2249\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The NodeAddress to match in the response.</div></div>",2250:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2250\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_baseReceived</div><div class=\"TTSummary\">Whether the Base Station received response has been collected or not.</div></div>",2251:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2251\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_baseReceivedWaitTime</div><div class=\"TTSummary\">The wait time (in milliseconds) that was sent in the Base Station received response.</div></div>",2253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2253\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> baseReceived() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Base Station received response has been collected or not.</div></div>",2254:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2254\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> baseReceivedWaitTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the wait time (in milliseconds) that was sent in the Base Station received response.&nbsp; This is only valid if baseReceived returns true.</div></div>"});