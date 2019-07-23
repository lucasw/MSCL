NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/NodeEeprom.h",{3308:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">The settings for the NodeEeprom object.</div></div>",3310:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3310\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useGroupRead</div><div class=\"TTSummary\">Whether to use group eeprom read or not.</div></div>",3311:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3311\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> numRetries</div><div class=\"TTSummary\">The number of retries to use for reading and writing.</div></div>",3312:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3312\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> useEepromCache</div><div class=\"TTSummary\">Whether to use the eeprom cache for reads and writes.</div></div>",3313:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3313\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeEeprom</div></div></div><div class=\"TTSummary\">Used to read and write to Wireless Nodes\' eeproms and provide caching functionality.</div></div>",3315:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3315\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an Eeprom object.</div></div>",3317:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3317\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The BaseStation to use for communication with the Node.</div></div>",3318:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3318\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_useGroupRead</div><div class=\"TTSummary\">Whether we can use a group eeprom read when reading from eeprom.</div></div>",3320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> updateCacheFromDevice(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">final</span></td></tr></table></div><div class=\"TTSummary\">Attempts to update the cache by reading the value from the Node with the nodeAddress given at initialization.&nbsp; Any values that are read from the Node will be updated in the cache.</div></div>",3321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseEepromPage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pageData,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">pageIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses a page download result containing eeprom values.&nbsp; The eeprom cache will be updated with all the parsed values.</div></div>",3322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parseBatchEepromResult(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">map&lt;<span class=\"SHKeyword\">uint16</span>, <span class=\"SHKeyword\">uint16</span>&gt;&nbsp;</td><td class=\"PName last\">eepromMap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses the response from a Batch Node Eeprom Read command.&nbsp; The eeprom cache will be updated with all the parsed values.</div></div>",3323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateSettings(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">NodeEepromSettings&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the settings for this eeprom object.</div></div>",3324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">base</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Updates the BaseStation object that is set for use in communicating with the Node.</div></div>",3325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3325\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to read an eeprom value from the Node.&nbsp; If caching is enabled and there is a previously cached value available, this will just return the value from the cache and will not communicate with the Node.</div></div>",3326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Attempts to write an eeprom value to the Node.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; If caching is enabled and the value in the cache is the same as that attempting to be written, nothing will be written to the Node and this function will have no affect.</div></div>"});