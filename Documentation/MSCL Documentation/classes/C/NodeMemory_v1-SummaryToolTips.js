NDSummary.OnToolTipsLoaded("CClass:NodeMemory_v1",{6581:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6581\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeMemory_v1</div></div></div><div class=\"TTSummary\">Provides easy access to the datalogging memory on a WirelessNode.</div></div>",6583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6583\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">NodeMemory_v1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">logPage,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">pageOffset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a NodeMemory_v1 object.</div></div>",6584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~NodeMemory_v1()</div><div class=\"TTSummary\">Destroys a NodeMemory_v1 object.</div></div>",6590:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_currentAddress</div><div class=\"TTSummary\">The current address to read data from.</div></div>",6591:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_logPage</div><div class=\"TTSummary\">The last log page that contains datalogging data.</div></div>",6592:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_pageOffset</div><div class=\"TTSummary\">The byte offset into the last log page containing datalogging data.</div></div>",6593:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6593\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_currentPageNumber</div><div class=\"TTSummary\">Holds the page number of the data that is stored in m_currentData</div></div>",6594:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">Holds the page number of the data that is stored in m_previousData</div></div>",6595:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6595\" class=\"NDPrototype NoParameterForm\">ByteStream m_previousData</div><div class=\"TTSummary\">Holds the previously downloaded page data for easily returning to it</div></div>",6597:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6597\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> findPageAndOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">bytePosition,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the page and offset from the memory position.</div></div>",6598:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6598\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream* getByteStream(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">page</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a pointer to the ByteStream containing the data for the requested page.&nbsp; If the data does not exist in a current ByteStream, it will be downloaded from the Node.</div></div>",6599:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6599\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> findData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">bytePosition,</td></tr><tr><td class=\"PType first\">ByteStream&nbsp;</td><td class=\"PNamePrefix\">**</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">offset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the data ByteStream, and offset into the ByteStream to read from, given the byte position.</div></div>",6600:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> nextByte() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Reads the next byte from the datalogging data.</div></div>",6601:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6601\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> calcTotalBytes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">logPage,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">pageOffset</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the total number of bytes currently logged to memory.</div></div>",6602:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6602\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> isNextByteNewHeader() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Checks if the next byte will be the start of a new header.&nbsp; Note: upon returning from this function, the read position will not have changed.</div></div>",6603:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6603\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> readIndex() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Returns the current read index for the data.</div></div>",6604:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6604\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> setAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">newAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Sets the read address to the specified value.</div></div>",6605:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint32</span> bytesRemaining() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Calculates how many bytes are remaining in the Node\'s datalogging memory, based on the given byte position.</div></div>",6606:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6606\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual float</span> percentComplete() <span class=\"SHKeyword\">override</span></div><div class=\"TTSummary\">Calculates the percentage complete based on the given byte position.</div></div>"});