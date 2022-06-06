NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/ConfigIssue.h",{5641:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5641\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",5643:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Configuration Options for Wireless Nodes and BaseStations that can be issues.</div></div>",5702:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5702\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConfigIssue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ConfigIssue::</td><td class=\"PType\">ConfigOption&nbsp;</td><td></td><td class=\"PName last\">optionId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ConfigIssue object.</div></div>",5703:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5703\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ConfigIssue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ConfigIssue::</td><td class=\"PType\">ConfigOption&nbsp;</td><td></td><td class=\"PName last\">optionId,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ConfigIssue object.</div></div>",5705:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5705\" class=\"NDPrototype NoParameterForm\">ConfigOption m_optionId</div><div class=\"TTSummary\">The ConfigOption identifying the configuration option for which the issue occurred.</div></div>",5706:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5706\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">The description of the issue.</div></div>",5707:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5707\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isChannelGroupIssue</div><div class=\"TTSummary\">Whether this issue applies to a channel group (true) or the entire Node (false).</div></div>",5708:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5708\" class=\"NDPrototype NoParameterForm\">ChannelMask m_channelMask</div><div class=\"TTSummary\">The ChannelMask that this issue applies to, if this is a channel group issue.</div></div>",5710:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5710\" class=\"NDPrototype NoParameterForm\">ConfigIssue::ConfigOption id() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ConfigOption identifying the configuration option for which the issue occurred.</div></div>",5711:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5711\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; description() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a description of the issue.</div></div>",5712:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5712\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isChannelGroupIssue() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the issue applies to a channel group (true) or the entire Node (false).</div></div>",5713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5713\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelMask&amp; channelMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The ChannelMask that the issue applies to, if this issue is a channel group issue.</div></div>",5715:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of ConfigIssue objects.</div></div>"});