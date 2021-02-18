(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{475:function(t,e,i){t.exports=i.p+"assets/img/mmio-white.0ee7b5c7.png"},631:function(t,e,i){"use strict";i.r(e);var a=i(25),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fixing-kaslr-slide-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixing-kaslr-slide-values"}},[t._v("#")]),t._v(" Fixing KASLR slide values")]),t._v(" "),a("ul",[a("li",[t._v("Supported version: 0.6.6")])]),t._v(" "),a("p",[t._v('This section is for users who wish to understand and fix "Couldn\'t allocate runtime area" errors. This is most common with either Z390, X99 and X299.')]),t._v(" "),a("ul",[a("li",[t._v("Note: OpenCore is required, Clover is no longer supported in this guide")])]),t._v(" "),a("h2",{attrs:{id:"so-what-is-kaslr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-what-is-kaslr"}},[t._v("#")]),t._v(" So what is KASLR")]),t._v(" "),a("p",[t._v("Well KASLR stands for Kernel address space layout randomization, what it's used for is security purposes. Specifically, this makes it much harder for attackers to figure out where the important objects are in memory as it's always random both between machines and between boots. "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("M"),a("OutboundLink")],1),a("a",{attrs:{href:"https://lwn.net/Articles/569635/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ore in-depth explainer on KASLR"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Where this becomes an issue is when you introduce devices with either small memory maps or just way too many devices present. There likely is space for the kernel to operate but there's also free space where the kernel won't fit entirely. This is where "),a("code",[t._v("slide=xxx")]),t._v(" fits in. Instead of letting macOS choose a random area to operate in each boot, we'll constrain it to somewhere that we know will work.")]),t._v(" "),a("h2",{attrs:{id:"and-who-is-this-info-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-who-is-this-info-for"}},[t._v("#")]),t._v(" And who is this info for")]),t._v(" "),a("p",[t._v("Well as I mentioned earlier, this is for users who don't have enough space for the kernel or moves to a place that is too small. You'll generally experience an error similar to this when booting:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error allocating 0x1197b pages at 0x0000000017a80000 alloc type 2\nCouldn't allocate runtime area\n")])])]),a("p",[t._v("With some variation:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Only 244/256 slide values are usable!\n")])])]),a("p",[t._v("Or even crashes while running macOS:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("panic(cpu 6 caller 0xffffff801fc057ba): a freed zone element has been modified in zone kalloc.4096: expected 0x3f00116dbe8a46f6 but found 0x3f00116d00000000\n")])])]),a("p",[t._v("The best part about these errors is that they can be random, also the reason why power cycling your PC 20 times also can fix the issue but only temporarily.")]),t._v(" "),a("p",[t._v("Fun Fact: It takes around 31 ms to find an area to operate in, manually setting a slide value can on average can reduce boot times by 0.207%!!!")]),t._v(" "),a("h2",{attrs:{id:"so-how-do-i-fix-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#so-how-do-i-fix-this"}},[t._v("#")]),t._v(" So how do I fix this")]),t._v(" "),a("p",[t._v("The real fix to this is quite simple actually. What you'll need:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("OpenCore users")]),t._v(":\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenRuntime"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenShell"),a("OutboundLink")],1),t._v("(Don't forget to enable this under "),a("code",[t._v("Root -> Misc -> Tools")]),t._v(")")])])])]),t._v(" "),a("p",[t._v("And we'll also need to configure our config.plist -> Booter:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AvoidRuntimeDefrag")]),t._v(": YES\n"),a("ul",[a("li",[t._v("Fixes UEFI runtime services like date, time, NVRAM, power control, etc")])])]),t._v(" "),a("li",[a("strong",[t._v("DevirtualiseMmio")]),t._v(": YES\n"),a("ul",[a("li",[t._v("Reduces Stolen Memory Footprint, expands options for "),a("code",[t._v("slide=N")]),t._v(" values and very helpful with fixing Memory Allocation issues on Z390.")])])]),t._v(" "),a("li",[a("strong",[t._v("EnableSafeModeSlide")]),t._v(": YES\n"),a("ul",[a("li",[t._v("Allows for slide values to be used in Safe mode")])])]),t._v(" "),a("li",[a("strong",[t._v("ProtectUefiServices")]),t._v(": NO\n"),a("ul",[a("li",[t._v("Protects UEFI services from being overridden by the firmware, mainly relevant for VMs, 300 series and newer systems like Ice Lake and Comet Lake")])])]),t._v(" "),a("li",[a("strong",[t._v("ProvideCustomSlide")]),t._v(": YES\n"),a("ul",[a("li",[t._v("This makes sure the kernel will only choose good regions and avoid those that may result in boot failures. It's still random but omits those bad regions in its randomization")])])]),t._v(" "),a("li",[a("strong",[t._v("RebuildAppleMemoryMap")]),t._v(": YES\n"),a("ul",[a("li",[t._v("Generates Memory Map compatible with macOS, can break on some laptop OEM firmwares so if you receive early boot failures disable this, this makes sure our memory map will fit to what the kernel expects")])])])]),t._v(" "),a("h2",{attrs:{id:"prepping-the-bios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepping-the-bios"}},[t._v("#")]),t._v(" Prepping the BIOS")]),t._v(" "),a("p",[t._v("The reason we need to reset the memory map is we want it to be more deterministic, what I mean by this is that there will be less variation on each boot so we have fewer edge cases(Memory Maps are not always consistent on boots). To prep:")]),t._v(" "),a("ul",[a("li",[t._v("Update BIOS(extremely important as early BIOS's shipped are known to have memory map issues, especially with Z390)")]),t._v(" "),a("li",[t._v("Clear CMOS")]),t._v(" "),a("li",[t._v("Enable much needed BIOS settings:\n"),a("ul",[a("li",[a("code",[t._v("Above4GDecoding")]),t._v(": This allows devices to use memory regions above 4GB meaning macOS will have more room to fit, can be problematic on some X99, X299 so recommended to test with and without.\n"),a("ul",[a("li",[t._v("Note: On BIOS supporting Resizable BAR Support, enabling Above4G will unlock this option. Ensure BAR support is disabled if the option presents itself.")])])]),t._v(" "),a("li",[a("code",[t._v("Boot Options -> Windows8.1/10 mode")]),t._v(": This will make sure no old legacy garbage is loaded. Fun fact, "),a("code",[t._v("other OS")]),t._v(" is only designed for booting older versions of Windows and not for other OS.")])])]),t._v(" "),a("li",[t._v("Disable as many unneeded devices in the BIOS(this means there is less variation in the map on each boot, so fewer chances of boot failure). Common settings:\n"),a("ul",[a("li",[a("code",[t._v("CSM")]),t._v(": For legacy support, adds a bunch of garbage we don't want. This also can break the shell so you can't boot into it.")]),t._v(" "),a("li",[a("code",[t._v("Intel SGX")]),t._v(": Software Guard Extensions, takes up a lot of space and does nothing in macOS.")]),t._v(" "),a("li",[a("code",[t._v("Parallel Port")]),t._v(": macOS can't even see parallel.")]),t._v(" "),a("li",[a("code",[t._v("Serial Port")]),t._v(": I'd like to know how many of you are debugging the kernel...")]),t._v(" "),a("li",[a("code",[t._v("iGPU")]),t._v(": Not ideal but some systems have such bloated maps that the iGPU just can't fit.")]),t._v(" "),a("li",[a("code",[t._v("Thunderbolt")]),t._v(": Many hacks don't have thunderbolt working, boards that don't have thunderbolt but have this option just waste more space.")]),t._v(" "),a("li",[a("code",[t._v("LED lighting")]),t._v(": Sorry mate, time to go.")]),t._v(" "),a("li",[a("code",[t._v("Legacy USB")]),t._v(": More Legacy Crap.")])])])]),t._v(" "),a("h2",{attrs:{id:"test-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-boot"}},[t._v("#")]),t._v(" Test boot")]),t._v(" "),a("p",[t._v("With our adjusted EFI, config.plist and BIOS settings, it's time we try out our new setup. If you still have issues, well it looks like we'll need to do a deep dive and calculate our slide value")]),t._v(" "),a("h2",{attrs:{id:"finding-the-slide-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-slide-value"}},[t._v("#")]),t._v(" Finding the Slide value")]),t._v(" "),a("p",[t._v("Now what you'll want to do is open the EFI shell in your boot manager of choice and run "),a("code",[t._v("memmap")]),t._v(". This will give you a list of all pages and their sizes. This is where the fun begins.")]),t._v(" "),a("p",[t._v("Example of what you'll see:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Start")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("End")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("# Pages")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Attributes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("RT_Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("800000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000001000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000057FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000057")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Reserved")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000058000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000058FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000059000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000008FFFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000037")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("RT_Code")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000090000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000090FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("800000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000091000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009DFFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000D")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Reserved")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009E000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000009FFFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000002")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000100000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B635FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000005B536")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B636000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B675FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000040")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000005B676000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006AF77FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000F902")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LoaderCode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006AF78000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B155FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("00000000000001DE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B156000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B523FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("00000000000003CE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ACPI_NVS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B524000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B524FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000001")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BS_Data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B526000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B625FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0000000000000100")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Available")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B626000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000006B634FFF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("000000000000000F")])])])]),t._v(" "),a("p",[t._v("Now you may be wondering how the hell we convert this to a slide value, well it's quite simple. What we're interested in is the largest available value within the "),a("code",[t._v("Start")]),t._v(" column. In this example we see that "),a("code",[t._v("000000006B626000")]),t._v(" is our largest, do note that these are in HEX so if there are multiple values close to each other you may need to convert them to decimal. To the calculate slide value(macOS's built-in calculator has a programming function by pressing ⌘+3):")]),t._v(" "),a("p",[a("code",[t._v("000000006B626000")]),t._v(" = "),a("code",[t._v("0x6B626000")])]),t._v(" "),a("p",[t._v("("),a("code",[t._v("0x6B626000")]),t._v(" - "),a("code",[t._v("0x100000")]),t._v(")/"),a("code",[t._v("0x200000")]),t._v(" = "),a("code",[t._v("0x35A")])]),t._v(" "),a("p",[t._v("And to verify that this is correct:")]),t._v(" "),a("p",[a("code",[t._v("0x100000")]),t._v(" + ("),a("code",[t._v("0x35A")]),t._v(" * "),a("code",[t._v("0x200000")]),t._v(") = "),a("code",[t._v("0x6B500000")])]),t._v(" "),a("p",[t._v("Whenever the returned value is "),a("strong",[t._v("not")]),t._v(" the original("),a("code",[t._v("0x6B500000")]),t._v(" vs "),a("code",[t._v("0x6B626000")]),t._v("), just add +1 to your final slide value. This is due to rounding. So for example "),a("code",[t._v("0x35A")]),t._v(" converted to decimal becomes "),a("code",[t._v("858")]),t._v(" and then +1 will give you "),a("code",[t._v("slide=859")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("But wait for just a second, this is higher than 256!")])]),t._v(" "),a("p",[t._v("That is correct, this is caused by memory maps that include "),a("code",[t._v("Above4GDecoding")]),t._v(" sectors which cannot be used. So you will need to keep going down the list until you find a small enough value(for us that would be "),a("code",[t._v("0000000000100000")]),t._v(").")]),t._v(" "),a("p",[t._v("And just to make it a bit clearer on the formula:")]),t._v(" "),a("p",[t._v("(HEX - "),a("code",[t._v("0x100000")]),t._v(")/"),a("code",[t._v("0x200000")]),t._v(" = Slide Value in HEX")]),t._v(" "),a("p",[a("code",[t._v("0x100000")]),t._v(" + (Slide Value in HEX * "),a("code",[t._v("0x200000")]),t._v(") = Your original HEX value(if not then add +1 to your slide value)")]),t._v(" "),a("p",[t._v("Now navigate into your config.plist and add your slide value with the rest of your boot arguments(for us it would be "),a("code",[t._v("slide=0")]),t._v(" when using "),a("code",[t._v("0x100000")]),t._v("). If this value still gives you errors then you may proceed to the second-largest "),a("code",[t._v("Start")]),t._v(" value and so on.")]),t._v(" "),a("p",[t._v("Sometimes you may find that when you calculate slide that you receive super small vales like "),a("code",[t._v("slide=-0.379150390625")]),t._v(", when this happens round this to "),a("code",[t._v("slide=0")]),t._v(".")]),t._v(" "),a("p",[t._v("And for users who are having issues finding their slide value can also type "),a("code",[t._v("$slide [insert largest #Pages value]")]),t._v(" in the #Sandbox channel on the "),a("a",{attrs:{href:"https://discord.gg/u8V7N5C",target:"_blank",rel:"noopener noreferrer"}},[t._v("r/Hackintosh Discord"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("But this is soooooo hard")])]),t._v(" "),a("p",[t._v("Well fret not, for there is a simple solution. After running "),a("code",[t._v("memmap")]),t._v(" in the shell, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("shell> fs0: //replace with your USB\n\nfs0:\\> dir //to verify this is the right directory, if not try fs1 and so on\n\nDirectory of fs0:\\\n01/01/01 3:30p   EFI\n\nfs0:\\> memmap > memmap.txt\n")])])]),a("p",[t._v("This will add a "),a("code",[t._v("memmap.txt")]),t._v(" file to the root of your EFI, you can then proceed to drop it into the r/Hackintosh discord in the #Sandbox channel and type "),a("code",[t._v("$slide [insert a link to memmap.txt]")])]),t._v(" "),a("h2",{attrs:{id:"using-devirtualisemmio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-devirtualisemmio"}},[t._v("#")]),t._v(" Using DevirtualiseMmio")]),t._v(" "),a("p",[t._v("DevirtualiseMmio is quite an interesting quirk, specifically in that it gets around a huge hurdle with many PCI device systems like some Z390 boards and virtually all HEDT boards like X99 and X299. How it does this is it takes MMIO regions and removes runtime attributes allowing them to be used as space for the kernel to sit comfortably, pair this with "),a("code",[t._v("ProvideCustomSlide")]),t._v(" quirk means we can keep the security feature of slide while also getting a bootable machine.")]),t._v(" "),a("p",[t._v("For extremely problematic systems like Threadripper TRX40 19H, we need to find specific regions that aren't required for proper operation. This is where "),a("code",[t._v("MmioWhitelist")]),t._v(" comes into play. Note that whitelisting isn't required for most systems")]),t._v(" "),a("p",[t._v("If you run the debug version of OpenCore with DevirtualiseMmio, you'll notice this in your logs:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("21:495 00:009 OCABC: MMIO devirt start\n21:499 00:003 OCABC: MMIO devirt 0x60000000 (0x10000 pages, 0x8000000000000001) skip 0\n21:503 00:003 OCABC: MMIO devirt 0xFE000000 (0x11 pages, 0x8000000000000001) skip 0\n21:506 00:003 OCABC: MMIO devirt 0xFEC00000 (0x1 pages, 0x8000000000000001) skip 0\n21:510 00:003 OCABC: MMIO devirt 0xFED00000 (0x1 pages, 0x8000000000000001) skip 0\n21:513 00:003 OCABC: MMIO devirt 0xFEE00000 (0x1 pages, 0x800000000000100D) skip 0\n21:516 00:003 OCABC: MMIO devirt 0xFF000000 (0x1000 pages, 0x800000000000100D) skip 0\n21:520 00:003 OCABC: MMIO devirt end, saved 278608 KB\n")])])]),a("ul",[a("li",[t._v("Note: See "),a("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[t._v("OpenCore Debugging")]),t._v(" on how to enable logging to file")],1)]),t._v(" "),a("p",[t._v("So we have 6 regions we need to go through and see which are bad, best idea is to block all MMIO sections "),a("em",[t._v("except")]),t._v(" one and try each region to get a list of good regions.")]),t._v(" "),a("p",[t._v("Now lets take the above example and create our own MmioWhitelist, we'll need to first convert the address from hexadecimal to decimal:")]),t._v(" "),a("ul",[a("li",[t._v("MMIO devirt 0x60000000 -> 1610612736")]),t._v(" "),a("li",[t._v("MMIO devirt 0xFE000000 -> 4261412864")]),t._v(" "),a("li",[t._v("MMIO devirt 0xFEC00000 -> 4273995776")]),t._v(" "),a("li",[t._v("MMIO devirt 0xFED00000 -> 4275044352")]),t._v(" "),a("li",[t._v("MMIO devirt 0xFEE00000 -> 4276092928")]),t._v(" "),a("li",[t._v("MMIO devirt 0xFF000000 -> 4278190080")])]),t._v(" "),a("p",[t._v("Should look something like this when done:")]),t._v(" "),a("p",[a("img",{attrs:{src:i(475),alt:""}})])])}),[],!1,null,null,null);e.default=l.exports}}]);