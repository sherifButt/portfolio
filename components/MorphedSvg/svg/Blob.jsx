import MorphedSvg from '../index'

const Blob = ({className,fill}) => {
  return (
     <MorphedSvg
        className={className}
        viewBox="0 0 460 460"
        width="360"
        height="360"
        paths={[
          //  {
          //     start: "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
          //     end: [
          //        "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
          //        "M220,389.3114928987164C283.2586806403807,393.0218308886474,347.51564228888117,366.7879732121036,379.7411836292784,312.2266153690334C412.4476280894382,256.8510360695088,411.29487158233553,183.10473686969996,371.7455973877218,132.3896384998583C337.9575018503917,89.06225452630682,274.919025395066,109.05899534050909,220,107.3861977773217C159.53002405316386,105.54432189401523,85.830664476084,72.91962142761801,51.35131879181144,122.63063850597683C15.35237296683416,174.53255761706498,55.96146464053552,241.83102933550077,89.72206305572567,295.2160019642457C120.40949219951627,343.74143225255193,162.6839106719329,385.9497082153277,220,389.3114928987164",
          //        "M220,388.8655422570614C278.22815063748925,383.8965366681917,336.71228568207647,353.8143820424655,356.5844766124832,298.8570843393413C373.22434261212686,252.83890382340977,319.56556259730513,218.9543746619937,297.17141703247086,175.4450616025581C270.7539223560789,124.11883248640734,277.7209585672475,34.234930962964654,220,33.48876587473429C162.2980399032415,32.742846381791324,169.99956496357413,124.5449887845989,139.29363492677146,173.40415839965524C104.2342357172682,229.19055309690114,12.92402683827535,264.5098048419759,36.03598139395209,326.2116756634069C60.39065588749669,391.23122975947484,150.82023196247508,394.7691241199868,220,388.8655422570614",
          //        "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
          //     ],
          //     fill: "#6b4fad",
          //     strokeWidth: "0",
          //     opacity: 0.8,
          //     blur: 3,
          //     duration: 8,
          //  },
           {
              start: "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
              end: [
                 "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
                 "M220,389.3114928987164C283.2586806403807,393.0218308886474,347.51564228888117,366.7879732121036,379.7411836292784,312.2266153690334C412.4476280894382,256.8510360695088,411.29487158233553,183.10473686969996,371.7455973877218,132.3896384998583C337.9575018503917,89.06225452630682,274.919025395066,109.05899534050909,220,107.3861977773217C159.53002405316386,105.54432189401523,85.830664476084,72.91962142761801,51.35131879181144,122.63063850597683C15.35237296683416,174.53255761706498,55.96146464053552,241.83102933550077,89.72206305572567,295.2160019642457C120.40949219951627,343.74143225255193,162.6839106719329,385.9497082153277,220,389.3114928987164",
                 "M220,388.8655422570614C278.22815063748925,383.8965366681917,336.71228568207647,353.8143820424655,356.5844766124832,298.8570843393413C373.22434261212686,252.83890382340977,319.56556259730513,218.9543746619937,297.17141703247086,175.4450616025581C270.7539223560789,124.11883248640734,277.7209585672475,34.234930962964654,220,33.48876587473429C162.2980399032415,32.742846381791324,169.99956496357413,124.5449887845989,139.29363492677146,173.40415839965524C104.2342357172682,229.19055309690114,12.92402683827535,264.5098048419759,36.03598139395209,326.2116756634069C60.39065588749669,391.23122975947484,150.82023196247508,394.7691241199868,220,388.8655422570614",
                 "M220,432.05131651976933C284.690727158962,421.0954755458355,280.0239166548091,330.4138582824854,313.3388530461644,273.88921193205397C347.7063274029301,215.57874988723418,443.1496381260055,169.31996346417583,409.44561765256003,110.62352165149959C375.74255713767053,51.92875163200201,287.24674101919885,103.66588017117566,220,111.33713417614884C173.2259529286496,116.67294064775848,123.00623902390268,110.38457886623776,93.06642159773983,146.71486434025255C52.75288445187593,195.63307556811046,23.40692810647579,260.7110403550989,49.17155640563205,318.627847894453C78.9477734686526,385.5623836022889,147.76970371610577,444.28403787474707,220,432.05131651976933",
              ],
              fill,
              strokeWidth: "0",
              opacity: 1,
              blur: 0,
              duration: 7,
              rotate: [-11, 0, -6, 8, -11],
              scale: [1.1, 0.9, 1.1, 1, 1.1],
           },
           // {
           //    start: "M 15.06837 -23.93074 C 50.80069 -46.784279999999995 -2.966990000000001 -99.30556 55.308060000000005 -77.23874 C 113.58312000000001 -55.17192000000001 59.469120000000004 -15.18234000000001 54.923660000000005 20.676239999999993 C 50.37821 56.53482999999999 59.815780000000004 76.56258 29.007700000000007 82.11813999999998 C -1.8003799999999934 87.67369999999998 -95.29723999999999 37.278719999999986 -80.58278999999999 -10.807920000000024 C -65.86833999999999 -58.89456000000003 -20.66395999999999 -1.0772000000000244 15.068370000000016 -23.930740000000025 z",
           //    end: [
           //       "M 15.06837 -23.93074 C 50.80069 -46.784279999999995 -2.966990000000001 -99.30556 55.308060000000005 -77.23874 C 113.58312000000001 -55.17192000000001 59.469120000000004 -15.18234000000001 54.923660000000005 20.676239999999993 C 50.37821 56.53482999999999 59.815780000000004 76.56258 29.007700000000007 82.11813999999998 C -1.8003799999999934 87.67369999999998 -95.29723999999999 37.278719999999986 -80.58278999999999 -10.807920000000024 C -65.86833999999999 -58.89456000000003 -20.66395999999999 -1.0772000000000244 15.068370000000016 -23.930740000000025 z",
           //       "M 6.10182 -15.13884 C 41.834140000000005 -37.99238 20.89474 -90.51366 53.723020000000005 -74.8571 C 86.5513 -59.20053 84.30210000000001 -13.771950000000004 79.75665000000001 22.08663 C 75.2112 57.94522 63.28125000000001 71.56271000000001 32.47317000000001 77.11827 C 1.66509000000001 82.67383 -73.37800999999999 48.79011 -81.58507999999999 25.178999999999995 C -89.79214999999999 1.567889999999995 -29.63049999999999 7.714689999999994 6.101820000000004 -15.138840000000002 z",
           //       "M -34.86676 -12.99718 C 0.8655600000000021 -35.850719999999995 23.5041 -88.72027 56.33238 -73.06371 C 89.16066000000001 -57.40714 85.08781 -27.878929999999997 80.54235 7.9796599999999955 C 75.9969 43.838249999999995 44.31461 69.66073 13.506529999999998 75.21628 C -17.301550000000002 80.77184 -73.50201 52.10312 -81.70908 28.49201 C -89.91615 4.8809000000000005 -70.59908 9.856360000000002 -34.86676 -12.99718 z",
           //       "M -39.02463 -17.13022 C -3.2923100000000005 -39.983760000000004 22.59153 -76.22113 55.41981 -60.56456 C 88.24808999999999 -44.90799 92.2885 -23.69587 87.74304000000001 12.162710000000004 C 83.19759 48.021300000000004 42.79355000000001 57.61726 11.985460000000003 63.172810000000005 C -18.822619999999997 68.72837000000001 -79.30242 54.46069000000001 -87.50949 30.849580000000003 C -95.71656 7.238470000000003 -74.75695999999999 5.723320000000005 -39.02464 -17.130219999999994 z",
           //       "M -17.86293 -55.86236 C 2.3293800000000005 -67.64363 38.49953 -70.43687 56.5648 -65.26982000000001 C 74.63007 -60.10276000000001 69.66136 2.4198299999999904 68.02965999999999 24.486649999999983 C 66.39796 46.55346999999998 59.71276999999999 61.724969999999985 28.904689999999995 67.28052999999998 C -1.9033900000000052 72.83608999999998 -85.10499000000002 28.074359999999984 -67.47679 -6.99751000000002 C -49.84858 -42.06938000000002 -38.05524 -44.08109000000002 -17.86292999999999 -55.86236000000002 z",
           //       "M 15.06837 -23.93074 C 50.80069 -46.784279999999995 -2.966990000000001 -99.30556 55.308060000000005 -77.23874 C 113.58312000000001 -55.17192000000001 59.469120000000004 -15.18234000000001 54.923660000000005 20.676239999999993 C 50.37821 56.53482999999999 59.815780000000004 76.56258 29.007700000000007 82.11813999999998 C -1.8003799999999934 87.67369999999998 -95.29723999999999 37.278719999999986 -80.58278999999999 -10.807920000000024 C -65.86833999999999 -58.89456000000003 -20.66395999999999 -1.0772000000000244 15.068370000000016 -23.930740000000025 z",
           //    ],
           //    fill: "#F99F06",
           //    strokeWidth: "0",
           //    opacity: 0.6,
           //    blur: 5,
           //    duration: 4,
           // },
           // {
           //    start: "M220,410.5942486990243C277.75455200170046,410.057482525997,330.6529310443745,382.0954331794372,367.7395065086054,337.8183249272316C406.08089353161097,292.043115905987,430.50332862899745,233.20058115469422,417.37576776290547,174.95026900537113C404.2108845219645,116.53434802686161,360.36151812778246,64.19642784428036,302.5541732429703,48.57449288463271C252.13743261800744,34.94980480234848,210.8071616511851,80.86370661008873,165.5295842498593,106.89101621464201C127.01777113101014,129.0291017971015,82.62374025533462,143.72340929673717,65.6320576949211,184.76652451383057C44.72374577642816,235.27019017581125,37.93021293925443,295.47153091240517,68.77631463335496,340.59686484862476C101.75505242818272,388.8420716674576,161.56283580873674,411.13735901497984,220,410.5942486990243",
           //    end: [
           //       "M220,410.5942486990243C277.75455200170046,410.057482525997,330.6529310443745,382.0954331794372,367.7395065086054,337.8183249272316C406.08089353161097,292.043115905987,430.50332862899745,233.20058115469422,417.37576776290547,174.95026900537113C404.2108845219645,116.53434802686161,360.36151812778246,64.19642784428036,302.5541732429703,48.57449288463271C252.13743261800744,34.94980480234848,210.8071616511851,80.86370661008873,165.5295842498593,106.89101621464201C127.01777113101014,129.0291017971015,82.62374025533462,143.72340929673717,65.6320576949211,184.76652451383057C44.72374577642816,235.27019017581125,37.93021293925443,295.47153091240517,68.77631463335496,340.59686484862476C101.75505242818272,388.8420716674576,161.56283580873674,411.13735901497984,220,410.5942486990243",
           //       "M220,308.1218652026728C277.91022317842356,308.4585773133184,339.8631832127902,389.29292568868027,380.28711839914075,347.82471150395793C419.68543934207617,307.4086064451972,352.08986887359873,246.9258119348875,330.4852081517903,194.78247222271648C315.9450342303038,159.689431974378,309.5875275067401,120.83264231896125,277.69027758097616,100.20490422890568C240.29679948962817,76.02279216157257,194.55249549233048,65.27374925198879,152.3921711964623,79.61089691365449C103.32508957279865,96.29677412912959,60.37670277120121,130.68742743388552,43.72738092929326,179.76692498345045C24.888895323614104,235.29972186855701,14.628137868520781,311.4556676605565,62.033271469192094,345.9742623321301C108.08501603093771,379.5073711687483,163.03402017459422,307.7906432827898,220,308.1218652026728",
           //       "M220,333.65533551666886C275.093965576864,332.5808489615064,338.4016109429517,384.58068570029263,376.71915791575947,344.97935796587734C415.2406142377745,305.1672891584023,382.434141753294,238.92752400647464,361.1411213640685,187.78546008054317C344.9976940142535,149.01180662902829,314.6041997592743,120.29238484387902,276.14403169430324,103.41571689694395C239.6412579972068,87.39797121815957,198.9518227071219,84.46446284992034,162.51216834937276,100.6252875349241C124.54720672420638,117.46257921101088,99.83021742218006,150.6566572364614,83.51149650196704,188.8473897472968C60.800926206540026,241.9969790785822,15.779780157935534,309.185581542485,55.423315515257165,351.24552630707797C95.23637556557584,393.4853288759616,161.96553074208578,334.78717012506394,220,333.65533551666886",
           //       "M220,414.987014320679C273.5183118050627,411.4591986589456,275.6745039848993,332.75996859401664,305.4933885336007,288.1787022809306C329.65371164367355,252.05737128274376,372.3155602948472,228.29624068122826,373.91790909331536,184.86924165767448C376.155174775688,124.234669024855,373.6588621080478,38.73142979245691,315.3116496476524,22.08332016404367C256.1849093942878,5.212789213197002,230.5731322617563,100.28885706444697,175.86858313646718,128.3601686218208C124.8868322191087,154.52114858829327,36.96443885599547,119.70820945273809,19.01457515228917,174.12638833097807C1.308125001442427,227.80661607602002,82.88459404604234,257.06539994439566,119.09958807141882,300.4653934403161C153.39393152426643,341.5636822252741,166.58861980832083,418.5077812731444,220,414.987014320679",
           //       "M220,410.5942486990243C277.75455200170046,410.057482525997,330.6529310443745,382.0954331794372,367.7395065086054,337.8183249272316C406.08089353161097,292.043115905987,430.50332862899745,233.20058115469422,417.37576776290547,174.95026900537113C404.2108845219645,116.53434802686161,360.36151812778246,64.19642784428036,302.5541732429703,48.57449288463271C252.13743261800744,34.94980480234848,210.8071616511851,80.86370661008873,165.5295842498593,106.89101621464201C127.01777113101014,129.0291017971015,82.62374025533462,143.72340929673717,65.6320576949211,184.76652451383057C44.72374577642816,235.27019017581125,37.93021293925443,295.47153091240517,68.77631463335496,340.59686484862476C101.75505242818272,388.8420716674576,161.56283580873674,411.13735901497984,220,410.5942486990243",
           //    ],
           //    fill: "#F99F06",
           //    strokeWidth: "0",
           //    opacity: 0.1,
           //    blur: 5,
           //    duration: 6,
           // },
           // {
           //    start: "M220,405.0582755720243C269.74087995326863,394.82931361726605,281.3501159349526,333.8115196935052,314.76751872148367,295.5745743107982C352.20358237862143,252.7393865930244,422.3604679212095,230.7748705423559,422.03330317099557,173.88721694173347C421.6636908530143,109.61874823263678,376.27093304470174,38.881610102706816,313.2196352747392,26.427432771334892C254.60455243495892,14.849516664944295,227.08166263590778,97.09058395545136,174.22061878905154,124.93813539362391C126.3271839241031,150.16871719628986,53.44110937240739,128.19752464453296,28.669877735199854,176.3301481387898C0.6681400810984677,230.73992135593434,20.11197768887589,301.1586805450954,59.37398781025677,348.0949702836208C97.72243910004855,393.93913402350034,161.45643525234405,417.09746541069023,220,405.0582755720243",
           //    end: [
           //       "M220,405.0582755720243C269.74087995326863,394.82931361726605,281.3501159349526,333.8115196935052,314.76751872148367,295.5745743107982C352.20358237862143,252.7393865930244,422.3604679212095,230.7748705423559,422.03330317099557,173.88721694173347C421.6636908530143,109.61874823263678,376.27093304470174,38.881610102706816,313.2196352747392,26.427432771334892C254.60455243495892,14.849516664944295,227.08166263590778,97.09058395545136,174.22061878905154,124.93813539362391C126.3271839241031,150.16871719628986,53.44110937240739,128.19752464453296,28.669877735199854,176.3301481387898C0.6681400810984677,230.73992135593434,20.11197768887589,301.1586805450954,59.37398781025677,348.0949702836208C97.72243910004855,393.93913402350034,161.45643525234405,417.09746541069023,220,405.0582755720243",
           //       "M220,351.0915037021041C268.54594444476066,358.41087507098183,326.73959391701493,367.8896730228137,358.45560468599535,330.41466027870314C390.58216554160714,292.45454965009907,374.59719698684796,235.31636823569582,357.5080701186504,188.61468031943488C343.35188325130343,149.928220428179,310.39229779977245,126.5436638129314,275.7166638463267,104.30315537747434C231.32038999490655,75.82795274899428,186.1519475156729,28.700400642602354,136.67591764078065,46.9757601313254C85.24972968396064,65.97146521158417,63.290441420219686,128.90555563359933,60.841857477294624,183.67319257313505C58.8206293400366,228.88213430175,94.39343530490119,262.5041975599472,125.57357601049141,295.3025603389601C152.0746946290634,323.1790638707656,181.96677762140195,345.3571569481578,220,351.0915037021041",
           //       "M220,356.62767712026834C265.92566852339996,355.6738706325983,316.345522346622,355.56878033951654,345.86631182395223,320.3750342363766C375.9932194666348,284.45869333826033,376.61116439392833,232.1063031826339,361.7410251794619,187.64853594941792C348.514316061076,148.104188262707,311.0663354884766,126.87842286571464,274.46464242268,106.90300465264367C234.1091033775038,84.87892046090428,186.76360385253008,45.94826432965475,148.33228617296862,71.18045879474627C110.27222512532879,96.16890362806068,143.19055040330264,155.77033593484046,132.59223758369015,200.04974861743264C121.68838447623826,245.6056988703598,64.56993373790621,284.8417112810711,87.40255412863357,325.7429345161897C110.67569456374235,367.43328350062905,172.26383577564863,357.6190848579797,220,356.62767712026834",
           //       "M220,345.43211399950087C267.3623220415167,348.3166039910135,318.7118410966331,358.5754513845698,354.0237996915433,326.88041373091147C395.4912181941895,289.6604054634905,430.6149841335342,227.88224412845454,407.3998248085234,177.2272128855972C385.25922379480335,128.9168472152936,310.3201499981234,154.79419284223627,263.5732876844125,129.51913580431554C210.35036907295213,100.74260970077167,185.3742217507879,12.663956571892554,126.17787405113674,25.176347995280715C65.19858481776096,38.06560156003216,39.72700916098258,115.64805691487189,35.1318059025362,177.80504107496222C31.22654478393166,230.62952779248488,65.75490353997404,276.1338769855165,104.99444347239826,311.71387090437344C136.13055286925305,339.94617395646776,178.0477389948651,342.87711095542375,220,345.43211399950087",
           //       "M220,405.0582755720243C269.74087995326863,394.82931361726605,281.3501159349526,333.8115196935052,314.76751872148367,295.5745743107982C352.20358237862143,252.7393865930244,422.3604679212095,230.7748705423559,422.03330317099557,173.88721694173347C421.6636908530143,109.61874823263678,376.27093304470174,38.881610102706816,313.2196352747392,26.427432771334892C254.60455243495892,14.849516664944295,227.08166263590778,97.09058395545136,174.22061878905154,124.93813539362391C126.3271839241031,150.16871719628986,53.44110937240739,128.19752464453296,28.669877735199854,176.3301481387898C0.6681400810984677,230.73992135593434,20.11197768887589,301.1586805450954,59.37398781025677,348.0949702836208C97.72243910004855,393.93913402350034,161.45643525234405,417.09746541069023,220,405.0582755720243",
           //    ],
           //    fill: " #FF0066",
           //    strokeWidth: "0",
           //    opacity: 0.1,
           //    blur: 5,
           //    duration: 5,
           // },
        ]}
     />
  );
}

Blob.defaultProps = {
  fill:"#6b4fad"
}

export default Blob
