// Delimits '|' and '\d)'
// RexEx lookahead used. use only ES2018 supported browsers.
export const LOG_SPLIT = new RegExp("(?<=\\d)\\)|\\|", 'g');
export const LOG_IGNORE = ['--', '=>'];

export const TYPE_CPU = 'cpu';
export const TYPE_MISC = 'show';

export const CLASS_LOG = {"111735834116501/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933787919,"sector":268435752,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735834123000/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945272668,"sector":377487776,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735834134212/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944078089,"sector":272632824,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735834163306/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944842033,"sector":377487696,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735834227020/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942848568,"sector":272632632,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735834235618/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934939384,"sector":268435960,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735834261105/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942418305,"sector":272632576,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735834280412/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934046898,"sector":268435808,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943672973/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943672973,"sector":272632760,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944603257/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944603257,"sector":377487664,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934667631/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934667631,"sector":268435912,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934001736/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934001736,"sector":268435800,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934760185/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934760185,"sector":268435928,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943926358/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943926358,"sector":272632800,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933706008/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933706008,"sector":268435736,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735935180150/submit_bio":{"magic":1700885511,"sequence":0,"time":111735935180150,"sector":268501272,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934091906/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934091906,"sector":268435816,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735942809221/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942809221,"sector":272632624,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943825539/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943825539,"sector":272632784,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735940966623/submit_bio":{"magic":1700885511,"sequence":0,"time":111735940966623,"sector":336029688,"bytes":20480,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735940678921/submit_bio":{"magic":1700885511,"sequence":0,"time":111735940678921,"sector":336020920,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934805132/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934805132,"sector":268435936,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735942578182/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942578182,"sector":272632600,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735939449426/submit_bio":{"magic":1700885511,"sequence":0,"time":111735939449426,"sector":268802216,"bytes":49152,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945832670/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945832670,"sector":377487864,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933752442/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933752442,"sector":268435744,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934850230/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934850230,"sector":268435944,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735926056988/submit_bio":{"magic":1700885511,"sequence":0,"time":111735926056988,"sector":235479448,"bytes":69632,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735942995090/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942995090,"sector":272632648,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945222382/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945222382,"sector":377487768,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945781646/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945781646,"sector":377487856,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933546296/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933546296,"sector":268435712,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943449971/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943449971,"sector":272632728,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933656783/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933656783,"sector":268435728,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934499044/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934499044,"sector":268435888,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943248888/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943248888,"sector":272632696,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943299077/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943299077,"sector":272632704,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943349400/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943349400,"sector":272632712,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944929535/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944929535,"sector":377487720,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943563524/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943563524,"sector":272632744,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942267780/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942267780,"sector":272696416,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943615177/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943615177,"sector":272632752,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944684256/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944684256,"sector":377487672,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945623414/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945623414,"sector":377487832,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945573314/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945573314,"sector":377487824,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943147971/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943147971,"sector":272632680,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934894970/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934894970,"sector":268435952,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735944775811/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944775811,"sector":377487688,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945159170/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945159170,"sector":377487760,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943097573/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943097573,"sector":272632672,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943399696/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943399696,"sector":272632720,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933955167/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933955167,"sector":268435784,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735944311679/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944311679,"sector":377487616,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933230014/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933230014,"sector":268507896,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735933935548/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933935548,"sector":268435776,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943198746/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943198746,"sector":272632688,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944892583/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944892583,"sector":377487704,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944398755/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944398755,"sector":377487632,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945004796/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945004796,"sector":377487728,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943724398/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943724398,"sector":272632768,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942504568/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942504568,"sector":272632592,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942749415/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942749415,"sector":272632616,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945731305/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945731305,"sector":377487848,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943045953/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943045953,"sector":272632656,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735939888118/submit_bio":{"magic":1700885511,"sequence":0,"time":111735939888118,"sector":336029416,"bytes":73728,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944497588/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944497588,"sector":377487648,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934559961/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934559961,"sector":268435896,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735945372794/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945372794,"sector":377487792,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944158913/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944158913,"sector":272632664,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735936115293/submit_bio":{"magic":1700885511,"sequence":0,"time":111735936115293,"sector":268713328,"bytes":16384,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934317964/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934317964,"sector":268435856,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943875723/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943875723,"sector":272632792,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942944015/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942944015,"sector":272632640,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944461309/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944461309,"sector":377487640,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942633588/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942633588,"sector":272632608,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944549885/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944549885,"sector":377487656,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934604796/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934604796,"sector":268435904,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943775297/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943775297,"sector":272632776,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945422812/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945422812,"sector":377487800,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934407772/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934407772,"sector":268435872,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735945473077/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945473077,"sector":377487808,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735943500283/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943500283,"sector":272632736,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944027084/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944027084,"sector":272632816,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735936823111/submit_bio":{"magic":1700885511,"sequence":0,"time":111735936823111,"sector":268713360,"bytes":12288,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934984857/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934984857,"sector":268435968,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735937579710/submit_bio":{"magic":1700885511,"sequence":0,"time":111735937579710,"sector":336039088,"bytes":57344,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934362743/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934362743,"sector":268435864,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735943976861/submit_bio":{"magic":1700885511,"sequence":0,"time":111735943976861,"sector":272632808,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735944349957/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944349957,"sector":377487624,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735940295024/submit_bio":{"magic":1700885511,"sequence":0,"time":111735940295024,"sector":336039408,"bytes":40960,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934454062/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934454062,"sector":268435880,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934273198/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934273198,"sector":268435848,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735944739513/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944739513,"sector":377487680,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735937302659/submit_bio":{"magic":1700885511,"sequence":0,"time":111735937302659,"sector":336039056,"bytes":16384,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933597446/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933597446,"sector":268435720,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735938161790/submit_bio":{"magic":1700885511,"sequence":0,"time":111735938161790,"sector":3673016,"bytes":53248,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945680883/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945680883,"sector":377487840,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933836558/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933836558,"sector":268435760,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735935021829/submit_bio":{"magic":1700885511,"sequence":0,"time":111735935021829,"sector":268435792,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735934183637/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934183637,"sector":268435832,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735945523084/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945523084,"sector":377487816,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933898668/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933898668,"sector":268435768,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735939190720/submit_bio":{"magic":1700885511,"sequence":0,"time":111735939190720,"sector":268507944,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945913122/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945913122,"sector":377487712,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945883614/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945883614,"sector":377487872,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735958088482/submit_bio":{"magic":1700885511,"sequence":0,"time":111735958088482,"sector":336028888,"bytes":131072,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735946081338/submit_bio":{"magic":1700885511,"sequence":0,"time":111735946081338,"sector":377750520,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735933397384/submit_bio":{"magic":1700885511,"sequence":0,"time":111735933397384,"sector":268506760,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735938534645/submit_bio":{"magic":1700885511,"sequence":0,"time":111735938534645,"sector":336040376,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934138625/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934138625,"sector":268435824,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735945322874/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945322874,"sector":377487784,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934714772/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934714772,"sector":268435920,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735938917144/submit_bio":{"magic":1700885511,"sequence":0,"time":111735938917144,"sector":336031432,"bytes":69632,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945058370/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945058370,"sector":377487744,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735934228449/submit_bio":{"magic":1700885511,"sequence":0,"time":111735934228449,"sector":268435840,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":2,"error":0,"pdu_len":0},"111735944129201/submit_bio":{"magic":1700885511,"sequence":0,"time":111735944129201,"sector":272632832,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735945108816/submit_bio":{"magic":1700885511,"sequence":0,"time":111735945108816,"sector":377487752,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0},"111735942463421/submit_bio":{"magic":1700885511,"sequence":0,"time":111735942463421,"sector":272632584,"bytes":4096,"action":4294967295,"pid":0,"device":0,"cpu":0,"error":0,"pdu_len":0}}
export const TRACE_LOG =`
# tracer: function_graph
#
#     TIME        CPU  DURATION                  FUNCTION CALLS
#      |          |     |   |                     |   |   |   |
111735834116555 |   0)   1.602 us    |  submit_bio();
111735834118798 |   0)   0.511 us    |  __fsnotify_parent();
111735834119791 |   0)   0.504 us    |  fsnotify();
111735834120843 |   0)   0.529 us    |  __sb_end_write();
111735834123085 |   0)               |  submit_bio() {
111735834123606 |   0)               |    __x64_sys_dup2() {
111735834124129 |   0)               |      ksys_dup3() {
111735834124627 |   0)   0.490 us    |        expand_files();
111735834125643 |   0)               |        do_dup2() {
111735834126189 |   0)               |          filp_close() {
111735834126708 |   0)   0.501 us    |            dnotify_flush();
111735834127672 |   0)   0.510 us    |            locks_remove_posix();
111735834128639 |   0)               |            fput() {
111735834129231 |   0)               |              task_work_add() {
111735834129769 |   0)   0.493 us    |                kick_process();
111735834130751 |   0)   1.570 us    |              }
111735834131224 |   0)   2.653 us    |            }
111735834131651 |   0)   5.533 us    |          }
111735834132079 |   0)   6.533 us    |        }
111735834132520 |   0)   8.476 us    |      }
111735834133028 |   0)   9.469 us    |    }
111735834133673 |   0)               |    exit_to_usermode_loop() {
111735834134222 |   0)               |      submit_bio() {
111735834134815 |   0)               |        ____fput() {
111735834135332 |   0)               |          __fput() {
111735834135896 |   0)   0.500 us    |            __fsnotify_parent();
111735834136853 |   0)   0.508 us    |            fsnotify();
111735834137896 |   0)   0.530 us    |            locks_remove_file();
111735834138948 |   0)   0.530 us    |            mutex_lock();
111735834139981 |   0)   0.493 us    |            mutex_unlock();
111735834140965 |   0)   0.494 us    |            module_put();
111735834141952 |   0)   0.501 us    |            put_pid();
111735834142979 |   0)   0.515 us    |            __mnt_drop_write();
111735834144000 |   0)   0.585 us    |            dput();
111735834145049 |   0)               |            mntput() {
111735834145545 |   0)   0.488 us    |              mntput_no_expire();
111735834146427 |   0)   1.430 us    |            }
111735834147057 |   0)   0.626 us    |            kmem_cache_free();
111735834148245 |   0)               |            call_rcu() {
111735834148788 |   0)               |              __call_rcu.constprop.71() {
111735834149309 |   0)   0.495 us    |                rcu_segcblist_enqueue();
111735834150361 |   0)   1.604 us    |              }
111735834150824 |   0)   2.635 us    |            }
111735834151242 |   0) + 15.960 us   |          }
111735834151703 |   0) + 16.943 us   |        }
111735834152242 |   0) + 18.069 us   |      }
111735834152765 |   0)   0.500 us    |      mem_cgroup_handle_over_high();
111735834153752 |   0)   0.505 us    |      blkcg_maybe_throttle_current();
111735834154676 |   0) + 21.091 us   |    }
111735834155132 |   0) + 32.157 us   |  }
111735834156011 |   0)               |  do_syscall_64() {
111735834156572 |   0)               |    __x64_sys_fcntl() {
111735834157075 |   0)               |      __fdget_raw() {
111735834157568 |   0)   0.509 us    |        __fget_light();
111735834158460 |   0)   1.435 us    |      }
111735834159093 |   0)               |      do_fcntl() {
111735834159628 |   0)   0.506 us    |        get_close_on_exec();
111735834160533 |   0)   1.516 us    |      }
111735834160996 |   0)   4.499 us    |    }
111735834161469 |   0)   5.511 us    |  }
111735834162748 |   0)               |  do_syscall_64() {
111735834163366 |   0)               |    submit_bio() {
111735834163856 |   0)               |      __close_fd() {
111735834164385 |   0)               |        filp_close() {
111735834164898 |   0)   0.499 us    |          dnotify_flush();
111735834165840 |   0)   0.503 us    |          locks_remove_posix();
111735834166781 |   0)   0.476 us    |          fput();
111735834167693 |   0)   3.361 us    |        }
111735834168131 |   0)   4.332 us    |      }
111735834168568 |   0)   5.336 us    |    }
111735834169064 |   0)   6.400 us    |  }
111735834201755 |   0)               |  __do_page_fault() {
111735834202353 |   0)   0.540 us    |    down_read_trylock();
111735834203394 |   0)               |    find_vma() {
111735834203933 |   0)   0.567 us    |      vmacache_find();
111735834204862 |   0)   1.557 us    |    }
111735834205453 |   0)               |    handle_mm_fault() {
111735834206010 |   0)   0.508 us    |      mem_cgroup_from_task();
111735834207156 |   0)               |      __handle_mm_fault() {
111735834207902 |   0)               |        do_wp_page() {
111735834208420 |   0)   0.562 us    |          _vm_normal_page();
111735834209441 |   0)   0.560 us    |          reuse_swap_page();
111735834210919 |   0)   0.996 us    |          page_move_anon_rmap();
111735834211927 |   0)   0.520 us    |          unlock_page();
111735834212922 |   0)   0.505 us    |          ptep_set_access_flags();
111735834213860 |   0)   5.982 us    |        }
111735834214352 |   0)   7.259 us    |      }
111735834214823 |   0)   9.437 us    |    }
111735834215381 |   0)   0.540 us    |    up_read();
111735834216280 |   0) + 14.699 us   |  }
111735834217922 |   0)               |  do_syscall_64() {
111735834218532 |   0)               |    __x64_sys_rt_sigprocmask() {
111735834219195 |   0)               |      sigprocmask() {
111735834219780 |   0)               |        __set_current_blocked() {
111735834220383 |   0)               |          __set_task_blocked() {
111735834220926 |   0)               |            recalc_sigpending() {
111735834221459 |   0)   0.529 us    |              recalc_sigpending_tsk();
111735834222388 |   0)   1.514 us    |            }
111735834222857 |   0)   2.513 us    |          }
111735834223306 |   0)   3.610 us    |        }
111735834223798 |   0)   4.620 us    |      }
111735834224312 |   0)   5.844 us    |    }
111735834224775 |   0)   6.951 us    |  }
111735834225887 |   0)               |  do_syscall_64() {
111735834226489 |   0)               |    __x64_sys_lseek() {
111735834227025 |   0)               |      submit_bio() {
111735834227600 |   0)               |        __fdget_pos() {
111735834228139 |   0)   0.579 us    |          __fget_light();
111735834229131 |   0)   1.621 us    |        }
111735834229820 |   0)               |        ext4_llseek() {
111735834230445 |   0)   0.593 us    |          generic_file_llseek_size();
111735834231403 |   0)   1.666 us    |        }
111735834231890 |   0)   4.908 us    |      }
111735834232339 |   0)   5.926 us    |    }
111735834232850 |   0)   7.038 us    |  }
111735834233834 |   0)               |  do_syscall_64() {
111735834234457 |   0)               |    __x64_sys_clone() {
111735834234997 |   0)               |      _do_fork() {
111735834235668 |   0)               |        submit_bio.part.53() {
111735834236230 |   0)               |          recalc_sigpending() {
111735834236691 |   0)   0.475 us    |            recalc_sigpending_tsk();
111735834237583 |   0)   1.417 us    |          }
111735834238122 |   0)   0.478 us    |          tsk_fork_get_node();
111735834239153 |   0)               |          kmem_cache_alloc_node() {
111735834239719 |   0)   0.490 us    |            should_failslab();
111735834240780 |   0)               |            memcg_kmem_get_cache() {
111735834241286 |   0)   0.563 us    |              get_mem_cgroup_from_mm();
111735834242272 |   0)   1.546 us    |            }
111735834243025 |   0)   0.530 us    |            memcg_kmem_put_cache();
111735834243952 |   0)   4.872 us    |          }
111735834246041 |   0)               |          memcg_kmem_charge() {
111735834246560 |   0)   0.506 us    |            get_mem_cgroup_from_mm();
111735834247527 |   0)               |            memcg_kmem_charge_memcg() {
111735834248072 |   0)   0.546 us    |              try_charge();
111735834249139 |   0)               |              page_counter_try_charge() {
111735834249639 |   0)   0.493 us    |                propagate_protected_usage();
111735834250655 |   0)   0.454 us    |                propagate_protected_usage();
111735834251598 |   0)   2.508 us    |              }
111735834252081 |   0)   4.603 us    |            }
111735834252571 |   0)   6.577 us    |          }
111735834253157 |   0)               |          memcg_kmem_charge() {
111735834253650 |   0)   0.494 us    |            get_mem_cgroup_from_mm();
111735834254605 |   0)               |            memcg_kmem_charge_memcg() {
111735834255088 |   0)   0.506 us    |              try_charge();
111735834256029 |   0)               |              page_counter_try_charge() {
111735834256471 |   0)   0.403 us    |                propagate_protected_usage();
111735834257340 |   0)   0.430 us    |                propagate_protected_usage();
111735834258269 |   0)   2.267 us    |              }
111735834258726 |   0)   4.176 us    |            }
111735834259199 |   0)   6.099 us    |          }
111735834259715 |   0)               |          memcg_kmem_charge() {
111735834260202 |   0)   0.481 us    |            get_mem_cgroup_from_mm();
111735834261115 |   0)               |            memcg_submit_bio() {
111735834261601 |   0)   0.517 us    |              try_charge();
111735834262555 |   0)               |              page_counter_try_charge() {
111735834262966 |   0)   0.421 us    |                propagate_protected_usage();
111735834263842 |   0)   0.430 us    |                propagate_protected_usage();
111735834264720 |   0)   2.221 us    |              }
111735834265140 |   0)   4.095 us    |            }
111735834265597 |   0)   5.924 us    |          }
111735834266137 |   0)               |          memcg_kmem_charge() {
111735834266655 |   0)   0.509 us    |            get_mem_cgroup_from_mm();
111735834267622 |   0)               |            memcg_kmem_charge_memcg() {
111735834268120 |   0)   0.502 us    |              try_charge();
111735834269092 |   0)               |              page_counter_try_charge() {
111735834269520 |   0)   0.419 us    |                propagate_protected_usage();
111735834270444 |   0)   0.436 us    |                propagate_protected_usage();
111735834271354 |   0)   2.312 us    |              }
111735834272254 |   0)   4.226 us    |            }
111735834272725 |   0)   6.632 us    |          }
111735834273298 |   0)               |          arch_dup_task_struct() {
111735834274219 |   0)   0.624 us    |            fpu__copy();
111735834275236 |   0)   1.985 us    |          }
111735834275806 |   0)   0.650 us    |          get_random_u64();
111735834276965 |   0)               |          account_kernel_stack() {
111735834277550 |   0)   0.515 us    |            mod_zone_page_state();
111735834278512 |   0)   0.495 us    |            mod_zone_page_state();
111735834279466 |   0)   0.486 us    |            mod_zone_page_state();
111735834280422 |   0)   0.483 us    |            submit_bio();
111735834281349 |   0)   4.457 us    |          }
111735834281922 |   0)               |          kmem_cache_alloc_trace() {
111735834282460 |   0)   0.488 us    |            should_failslab();
111735834283704 |   0)   0.540 us    |            memcg_kmem_put_cache();
111735834284625 |   0)   2.758 us    |          }
111735834285306 |   0)               |          copy_creds() {
111735834285883 |   0)               |            prepare_creds() {
111735834286422 |   0)               |              kmem_cache_alloc() {
111735834286922 |   0)   0.451 us    |                should_failslab();
111735834287867 |   0)   0.660 us    |                memcg_kmem_get_cache();
111735834289185 |   0)   0.469 us    |                memcg_kmem_put_cache();
111735834290114 |   0)   3.746 us    |              }
111735834290981 |   0)               |              kmemdup() {
111735834291574 |   0)   1.378 us    |                __kmalloc_track_caller();
111735834293360 |   0)   2.451 us    |              }
111735834293851 |   0)   8.029 us    |            }
111735834294459 |   0)   0.502 us    |            key_put();
111735834295373 |   0) + 10.130 us   |          }
111735834295976 |   0)               |          __delayacct_tsk_init() {
111735834296510 |   0)               |            kmem_cache_alloc() {
111735834297003 |   0)   0.473 us    |              should_failslab();
111735834297962 |   0)               |              memcg_kmem_get_cache() {
111735834298440 |   0)   0.468 us    |                get_mem_cgroup_from_mm();
111735834299432 |   0)   1.491 us    |              }
111735834300144 |   0)   0.510 us    |              memcg_kmem_put_cache();
111735834301074 |   0)   4.594 us    |            }
111735834301525 |   0)   5.595 us    |          }
111735834302147 |   0)   0.533 us    |          acct_clear_integrals();
111735834303157 |   0)   0.484 us    |          cgroup_fork();
111735834304135 |   0)               |          sched_fork() {
111735834304666 |   0)               |            __sched_fork.isra.88() {
111735834305276 |   0)   0.675 us    |              init_dl_task_timer();
111735834306410 |   0)   0.571 us    |              init_dl_inactive_task_timer();
111735834307442 |   0)   0.491 us    |              __dl_clear_params();
111735834308351 |   0)   3.741 us    |            }
111735834308971 |   0)   0.523 us    |            init_entity_runnable_average();
111735834309986 |   0)   0.490 us    |            set_task_rq_fair();
111735834311082 |   0)               |            task_fork_fair() {
111735834311662 |   0)               |              update_rq_clock() {
111735834312141 |   0)   0.494 us    |                update_rq_clock.part.90();
111735834313074 |   0)   1.492 us    |              }
111735834313648 |   0)               |              update_curr() {
111735834314131 |   0)   0.466 us    |                update_min_vruntime();
111735834315112 |   0)   0.570 us    |                cpuacct_charge();
111735834316131 |   0)   0.764 us    |                __cgroup_account_cputime();
111735834317372 |   0)   3.779 us    |              }
111735834317935 |   0)               |              sched_slice.isra.82() {
111735834318446 |   0)   0.557 us    |                __calc_delta();
111735834319507 |   0)   0.480 us    |                __calc_delta();
111735834320426 |   0)   2.620 us    |              }
111735834320835 |   0)   9.864 us    |            }
111735834321303 |   0) + 17.203 us   |          }
111735834321954 |   0)   0.513 us    |          __mutex_init();
111735834323017 |   0)   0.531 us    |          audit_alloc();
111735834324169 |   0)   0.715 us    |          avc_has_perm();
111735834325459 |   0)   0.510 us    |          copy_semundo();
111735834326663 |   0)   ==========> |
111735834326663 |   0)               |          do_IRQ() {
111735834327154 |   0)               |            irq_enter() {
111735834327652 |   0)   0.496 us    |              rcu_irq_enter();
111735834328551 |   0)   1.454 us    |            }
111735834328999 |   0)               |            handle_irq() {
111735834329408 |   0)               |              handle_edge_irq() {
111735834329817 |   0)   0.387 us    |                irq_may_run();
111735834330629 |   0)   0.875 us    |                irq_chip_ack_parent();
111735834332002 |   0)   6.644 us    |                handle_irq_event();
111735834339617 |   0)   9.702 us    |              }
111735834340074 |   0) + 11.057 us   |            }
111735834340569 |   0)               |            irq_exit() {
111735834341078 |   0)               |              __do_softirq() {
111735834341616 |   0)   7.958 us    |                blk_done_softirq();
111735834350027 |   0)   8.981 us    |              }
111735834350540 |   0)   0.476 us    |              idle_cpu();
111735834351507 |   0)   0.508 us    |              rcu_irq_exit();
111735834352453 |   0) + 11.900 us   |            }
111735834352899 |   0) + 26.259 us   |          }
111735834352899 |   0)   <========== |
111735834353614 |   0)               |          dup_fd() {
111735834354184 |   0)               |            kmem_cache_alloc() {
111735834354728 |   0)   0.484 us    |              should_failslab();
111735834355645 |   0)               |              memcg_kmem_get_cache() {
111735834356075 |   0)   0.480 us    |                get_mem_cgroup_from_mm();
111735834357025 |   0)   1.442 us    |              }
111735834357737 |   0)   0.479 us    |              memcg_kmem_put_cache();
111735834358625 |   0)   4.524 us    |            }
111735834359168 |   0)   0.503 us    |            __init_waitqueue_head();
111735834360227 |   0)               |            alloc_fdtable() {
111735834360779 |   0)               |              kmem_cache_alloc_trace() {
111735834361235 |   0)   0.438 us    |                should_failslab();
111735834362184 |   0)   0.690 us    |                memcg_kmem_get_cache();
111735834363667 |   0)   0.477 us    |                memcg_kmem_put_cache();
111735834364604 |   0)   3.894 us    |              }
111735834365139 |   0)               |              kvmalloc_node() {
111735834365695 |   0)   1.523 us    |                __kmalloc_node();
111735834367660 |   0)   2.576 us    |              }
111735834368204 |   0)               |              kvmalloc_node() {
111735834368630 |   0)   1.178 us    |                __kmalloc_node();
111735834370296 |   0)   2.154 us    |              }
111735834370752 |   0) + 10.574 us   |            }
111735834371321 |   0)   0.722 us    |            copy_fd_bitmaps();
111735834374836 |   0) + 21.302 us   |          }
111735834375496 |   0)               |          copy_fs_struct() {
111735834375979 |   0)               |            kmem_cache_alloc() {
111735834376467 |   0)   0.465 us    |              should_failslab();
111735834377410 |   0)               |              memcg_kmem_get_cache() {
111735834377860 |   0)   0.432 us    |                get_mem_cgroup_from_mm();
111735834378820 |   0)   1.433 us    |              }
111735834379604 |   0)   0.513 us    |              memcg_kmem_put_cache();
111735834380564 |   0)   4.614 us    |            }
111735834381201 |   0)               |            path_get() {
111735834381740 |   0)   0.536 us    |              mntget();
111735834382701 |   0)   1.580 us    |            }
111735834383217 |   0)               |            path_get() {
111735834383698 |   0)   0.473 us    |              mntget();
111735834384681 |   0)   1.502 us    |            }
111735834385152 |   0)   9.690 us    |          }
111735834385706 |   0)               |          kmem_cache_alloc() {
111735834386182 |   0)   0.474 us    |            should_failslab();
111735834387141 |   0)               |            memcg_kmem_get_cache() {
111735834387624 |   0)   0.491 us    |              get_mem_cgroup_from_mm();
111735834388573 |   0)   1.472 us    |            }
111735834389218 |   0)   0.515 us    |            memcg_kmem_put_cache();
111735834390153 |   0)   4.498 us    |          }
111735834391122 |   0)               |          kmem_cache_alloc() {
111735834391623 |   0)   0.495 us    |            should_failslab();
111735834392550 |   0)               |            memcg_kmem_get_cache() {
111735834393030 |   0)   0.480 us    |              get_mem_cgroup_from_mm();
111735834394000 |   0)   1.490 us    |            }
111735834394719 |   0)   0.484 us    |            memcg_kmem_put_cache();
111735834395633 |   0)   4.557 us    |          }
111735834396142 |   0)   0.464 us    |          __init_waitqueue_head();
111735834397382 |   0)   0.503 us    |          __mutex_init();
111735834398382 |   0)               |          kmem_cache_alloc() {
111735834398872 |   0)   0.469 us    |            should_failslab();
111735834399824 |   0)               |            memcg_kmem_get_cache() {
111735834400315 |   0)   0.496 us    |              get_mem_cgroup_from_mm();
111735834401195 |   0)   1.410 us    |            }
111735834401728 |   0)   0.498 us    |            memcg_kmem_put_cache();
111735834402669 |   0)   4.318 us    |          }
111735834403347 |   0)               |          mm_init.isra.49() {
111735834403877 |   0)   0.491 us    |            __init_rwsem();
111735834404874 |   0)               |            pgd_alloc() {
111735834405432 |   0)               |              __get_free_pages() {
111735834405946 |   0)   4.532 us    |                alloc_pages_current();
111735834410904 |   0)   5.566 us    |              }
111735834411641 |   0)   0.615 us    |              preallocate_pmds.constprop.22();
111735834412640 |   0)   0.527 us    |              preallocate_pmds.constprop.22();
111735834414317 |   0)   9.077 us    |            }
111735834414845 |   0)   0.498 us    |            __mutex_init();
111735834415822 |   0)   0.490 us    |            __init_rwsem();
111735834416740 |   0) + 13.451 us   |          }
111735834417359 |   0)   0.588 us    |          uprobe_start_dup_mmap();
111735834418405 |   0)   0.530 us    |          down_write_killable();
111735834419444 |   0)   0.532 us    |          uprobe_dup_mmap();
111735834420460 |   0)   0.538 us    |          down_write();
111735834421432 |   0)   0.555 us    |          get_mm_exe_file();
111735834422637 |   0)               |          vm_area_dup() {
111735834423126 |   0)               |            kmem_cache_alloc() {
111735834423615 |   0)   0.437 us    |              should_failslab();
111735834424571 |   0)               |              memcg_kmem_get_cache() {
111735834425020 |   0)   0.436 us    |                get_mem_cgroup_from_mm();
111735834425909 |   0)   1.384 us    |              }
111735834426465 |   0)               |              __slab_alloc() {
111735834426928 |   0)   0.663 us    |                ___slab_alloc();
111735834428077 |   0)   1.658 us    |              }
111735834428604 |   0)   0.527 us    |              memcg_kmem_put_cache();
111735834429551 |   0)   6.446 us    |            }
111735834430030 |   0)   7.432 us    |          }
111735834430633 |   0)   0.514 us    |          vma_dup_policy();
111735834431634 |   0)   0.476 us    |          anon_vma_fork();
111735834432653 |   0)   0.517 us    |          down_write();
111735834433675 |   0)   0.763 us    |          vma_interval_tree_insert_after();
111735834434913 |   0)   0.496 us    |          up_write();
111735834435974 |   0)               |          __vma_link_rb() {
111735834436557 |   0)   0.537 us    |            vma_compute_subtree_gap();
111735834437633 |   0)   1.761 us    |          }
111735834438228 |   0)   0.630 us    |          copy_page_range();
111735834439547 |   0)               |          cap_vm_enough_memory() {
111735834440073 |   0)   0.501 us    |            cap_capable();
111735834441011 |   0)   1.511 us    |          }
111735834441714 |   0)   0.670 us    |          cred_has_capability();
111735834442805 |   0)   0.540 us    |          __vm_enough_memory();
111735834443844 |   0)               |          vm_area_dup() {
111735834444332 |   0)               |            kmem_cache_alloc() {
111735834444870 |   0)   0.495 us    |              should_failslab();
111735834445830 |   0)               |              memcg_kmem_get_cache() {
111735834446264 |   0)   0.408 us    |                get_mem_cgroup_from_mm();
111735834447145 |   0)   1.352 us    |              }
111735834447699 |   0)   0.503 us    |              memcg_kmem_put_cache();
111735834448628 |   0)   4.326 us    |            }
111735834449103 |   0)   5.317 us    |          }
111735834449615 |   0)   0.474 us    |          vma_dup_policy();
111735834450563 |   0)               |          anon_vma_fork() {
111735834451079 |   0)               |            anon_vma_clone() {
111735834451582 |   0)               |              kmem_cache_alloc() {
111735834452011 |   0)   0.411 us    |                should_failslab();
111735834452921 |   0)   0.567 us    |                memcg_kmem_get_cache();
111735834453979 |   0)   0.459 us    |                memcg_kmem_put_cache();
111735834454921 |   0)   3.376 us    |              }
111735834455532 |   0)   0.559 us    |              down_write();
111735834456500 |   0)   0.625 us    |              anon_vma_interval_tree_insert();
111735834457644 |   0)   0.528 us    |              up_write();
111735834458556 |   0)   7.549 us    |            }
111735834459076 |   0)               |            kmem_cache_alloc() {
111735834459538 |   0)   0.454 us    |              should_failslab();
111735834460524 |   0)               |              memcg_kmem_get_cache() {
111735834460972 |   0)   0.443 us    |                get_mem_cgroup_from_mm();
111735834461875 |   0)   1.418 us    |              }
111735834462600 |   0)   0.468 us    |              memcg_kmem_put_cache();
111735834463504 |   0)   4.465 us    |            }
111735834464035 |   0)               |            kmem_cache_alloc() {
111735834464528 |   0)   0.483 us    |              should_failslab();
111735834465470 |   0)               |              memcg_kmem_get_cache() {
111735834465906 |   0)   0.426 us    |                get_mem_cgroup_from_mm();
111735834466822 |   0)   1.373 us    |              }
111735834467383 |   0)   0.497 us    |              memcg_kmem_put_cache();
111735834468324 |   0)   4.329 us    |            }
111735834468883 |   0)   0.539 us    |            down_write();
111735834469901 |   0)   0.563 us    |            anon_vma_interval_tree_insert();
111735834470916 |   0)   0.491 us    |            up_write();
111735834472188 |   0) + 21.294 us   |          }
111735834472756 |   0)   0.496 us    |          down_write();
111735834473689 |   0)               |          vma_interval_tree_insert_after() {
111735834474324 |   0)   0.527 us    |            vma_interval_tree_augment_rotate();
111735834475412 |   0)   0.508 us    |            vma_interval_tree_augment_rotate();
111735834476315 |   0)   2.643 us    |          }
111735834476843 |   0)   0.522 us    |          up_write();
111735834477781 |   0)               |          __vma_link_rb() {
111735834478292 |   0)   0.503 us    |            vma_compute_subtree_gap();
111735834479277 |   0)   0.545 us    |            vma_compute_subtree_gap();
111735834480266 |   0)   2.504 us    |          }
111735834480776 |   0)               |          copy_page_range() {
111735834481422 |   0)               |            __pud_alloc() {
111735834481985 |   0)               |              get_zeroed_page() {
111735834482490 |   0)   3.136 us    |                __get_free_pages();
111735834485993 |   0)   4.117 us    |              }
111735834486608 |   0)   0.531 us    |              __pti_set_user_pgtbl();
111735834487550 |   0)   6.181 us    |            }
111735834488143 |   0)               |            __pmd_alloc() {
111735834488664 |   0)               |              alloc_pages_current() {
111735834489130 |   0)   0.457 us    |                get_task_policy.part.43();
111735834490054 |   0)   0.447 us    |                policy_nodemask();
111735834490939 |   0)   0.450 us    |                policy_node();
111735834491853 |   0)   2.108 us    |                __alloc_pages_nodemask();
111735834494416 |   0)   5.804 us    |              }
111735834494885 |   0)   6.817 us    |            }
111735834495520 |   0)               |            __pte_alloc() {
111735834496069 |   0)               |              pte_alloc_one() {
111735834496582 |   0)   2.476 us    |                alloc_pages_current();
111735834499501 |   0)   0.474 us    |                inc_zone_page_state();
111735834500413 |   0)   4.422 us    |              }
111735834500875 |   0)   5.444 us    |            }
111735834501577 |   0)   0.489 us    |            _vm_normal_page();
111735834502751 |   0)   0.489 us    |            _vm_normal_page();
111735834503717 |   0)   0.481 us    |            _vm_normal_page();
111735834504681 |   0)   0.488 us    |            _vm_normal_page();
111735834505760 |   0) + 25.031 us   |          }
111735834506326 |   0)               |          cap_vm_enough_memory() {
111735834506821 |   0)   0.505 us    |            cap_capable();
111735834507721 |   0)   1.427 us    |          }
111735834508266 |   0)   0.523 us    |          cred_has_capability();
111735834509238 |   0)   0.498 us    |          __vm_enough_memory();
111735834510182 |   0)               |          vm_area_dup() {
111735834510643 |   0)               |            kmem_cache_alloc() {
111735834511149 |   0)   0.450 us    |              should_failslab();
111735834512055 |   0)               |              memcg_kmem_get_cache() {
111735834512509 |   0)   0.446 us    |                get_mem_cgroup_from_mm();
111735834513443 |   0)   1.407 us    |              }
111735834513946 |   0)   0.468 us    |              memcg_kmem_put_cache();
111735834514868 |   0)   4.227 us    |            }
111735834515366 |   0)   5.186 us    |          }
111735834515868 |   0)   0.473 us    |          vma_dup_policy();
111735834516807 |   0)               |          anon_vma_fork() {
111735834517308 |   0)               |            anon_vma_clone() {
111735834517786 |   0)               |              kmem_cache_alloc() {
111735834518251 |   0)   0.438 us    |                should_failslab();
111735834519129 |   0)   0.560 us    |                memcg_kmem_get_cache();
111735834520173 |   0)   0.463 us    |                memcg_kmem_put_cache();
111735834521089 |   0)   3.342 us    |              }
111735834521605 |   0)   0.481 us    |              down_write();
111735834522561 |   0)   0.613 us    |              anon_vma_interval_tree_insert();
111735834523601 |   0)   0.478 us    |              up_write();
111735834524498 |   0)   7.218 us    |            }
111735834525000 |   0)               |            kmem_cache_alloc() {
111735834525466 |   0)   0.454 us    |              should_failslab();
111735834526388 |   0)               |              memcg_kmem_get_cache() {
111735834526820 |   0)   0.430 us    |                get_mem_cgroup_from_mm();
111735834527778 |   0)   1.399 us    |              }
111735834528305 |   0)   0.496 us    |              memcg_kmem_put_cache();
111735834529224 |   0)   4.252 us    |            }
111735834529781 |   0)               |            kmem_cache_alloc() {
111735834530242 |   0)   0.463 us    |              should_failslab();
111735834531192 |   0)               |              memcg_kmem_get_cache() {
111735834531628 |   0)   0.430 us    |                get_mem_cgroup_from_mm();
111735834532524 |   0)   1.356 us    |              }
111735834533036 |   0)   0.474 us    |              memcg_kmem_put_cache();
111735834534313 |   0)   4.192 us    |            }
111735834534837 |   0)   0.508 us    |            down_write();
111735834535751 |   0)   0.474 us    |            anon_vma_interval_tree_insert();
111735834536713 |   0)   0.469 us    |            up_write();
111735834537632 |   0) + 20.858 us   |          }
111735834538210 |   0)   0.508 us    |          down_write();
111735834539151 |   0)               |          vma_interval_tree_insert_after() {
111735834539697 |   0)   0.492 us    |            vma_interval_tree_augment_rotate();
111735834540814 |   0)   0.482 us    |            vma_interval_tree_augment_rotate();
111735834541691 |   0)   2.585 us    |          }
111735834542191 |   0)   0.484 us    |          up_write();
111735834543156 |   0)               |          __vma_link_rb() {
111735834543648 |   0)   0.496 us    |            vma_compute_subtree_gap();
111735834544705 |   0)               |            vma_gap_callbacks_rotate() {
111735834545201 |   0)   0.518 us    |              vma_compute_subtree_gap();
111735834546097 |   0)   1.482 us    |            }
111735834546536 |   0)   3.408 us    |          }
111735834547045 |   0)               |          copy_page_range() {
111735834547797 |   0)   0.510 us    |            _vm_normal_page();
111735834548796 |   0)   0.488 us    |            _vm_normal_page();
111735834549775 |   0)   0.476 us    |            _vm_normal_page();
111735834550747 |   0)   0.459 us    |            _vm_normal_page();
111735834551950 |   0)   0.513 us    |            _vm_normal_page();
111735834552932 |   0)   0.481 us    |            _vm_normal_page();
111735834553971 |   0)   0.476 us    |            _vm_normal_page();
111735834554960 |   0)   0.475 us    |            _vm_normal_page();
111735834555971 |   0)   0.514 us    |            _vm_normal_page();
111735834556962 |   0)   9.951 us    |          }
111735834557474 |   0)               |          cap_vm_enough_memory() {
111735834557967 |   0)   0.476 us    |            cap_capable();
111735834558873 |   0)   1.414 us    |          }
111735834559446 |   0)   0.506 us    |          cred_has_capability();
111735834560383 |   0)   0.455 us    |          __vm_enough_memory();
111735834561325 |   0)               |          vm_area_dup() {
111735834561806 |   0)               |            kmem_cache_alloc() {
111735834562269 |   0)   0.454 us    |              should_failslab();
111735834563203 |   0)               |              memcg_kmem_get_cache() {
111735834563644 |   0)   0.431 us    |                get_mem_cgroup_from_mm();
111735834564599 |   0)   1.387 us    |              }
111735834565105 |   0)   0.472 us    |              memcg_kmem_put_cache();
111735834566033 |   0)   4.247 us    |            }
111735834566537 |   0)   5.234 us    |          }
111735834567030 |   0)   0.481 us    |          vma_dup_policy();
111735834567972 |   0)               |          anon_vma_fork() {
111735834568425 |   0)               |            anon_vma_clone() {
111735834568926 |   0)               |              kmem_cache_alloc() {
111735834569375 |   0)   0.411 us    |                should_failslab();
111735834570281 |   0)   0.560 us    |                memcg_kmem_get_cache();
111735834571306 |   0)   0.458 us    |                memcg_kmem_put_cache();
111735834572235 |   0)   3.354 us    |              }
111735834572741 |   0)   0.505 us    |              down_write();
111735834573685 |   0)               |              anon_vma_interval_tree_insert() {
111735834574337 |   0)   0.477 us    |                __anon_vma_interval_tree_augment_rotate();
111735834575229 |   0)   1.594 us    |              }
111735834575740 |   0)   0.483 us    |              up_write();
111735834576629 |   0)   8.216 us    |            }
111735834577125 |   0)               |            kmem_cache_alloc() {
111735834577634 |   0)   0.494 us    |              should_failslab();
111735834578560 |   0)               |              memcg_kmem_get_cache() {
111735834579006 |   0)   0.433 us    |                get_mem_cgroup_from_mm();
111735834579915 |   0)   1.378 us    |              }
111735834580438 |   0)   0.486 us    |              memcg_kmem_put_cache();
111735834581340 |   0)   4.250 us    |            }
111735834581846 |   0)               |            kmem_cache_alloc() {
111735834582322 |   0)   0.464 us    |              should_failslab();
111735834583251 |   0)               |              memcg_kmem_get_cache() {
111735834583697 |   0)   0.449 us    |                get_mem_cgroup_from_mm();
111735834584602 |   0)   1.377 us    |              }
111735834585122 |   0)   0.491 us    |              memcg_kmem_put_cache();
111735834586059 |   0)   4.210 us    |            }
111735834586565 |   0)   0.490 us    |            down_write();
111735834587778 |   0)   ==========> |
111735834587778 |   0)               |            do_IRQ() {
111735834588296 |   0)               |              irq_enter() {
111735834588745 |   0)   0.442 us    |                rcu_irq_enter();
111735834590101 |   0)   1.387 us    |              }
111735834590613 |   0)               |              handle_irq() {
111735834591119 |   0)   7.387 us    |                handle_edge_irq();
111735834599007 |   0)   8.433 us    |              }
111735834599530 |   0)               |              irq_exit() {
111735834600009 |   0)   7.193 us    |                __do_softirq();
111735834607687 |   0)   0.491 us    |                idle_cpu();
111735834608698 |   0)   0.593 us    |                rcu_irq_exit();
111735834609638 |   0) + 10.157 us   |              }
111735834610103 |   0) + 22.380 us   |            }
111735834610103 |   0)   <========== |
111735834610863 |   0)   0.513 us    |            anon_vma_interval_tree_insert();
111735834611847 |   0)   0.512 us    |            up_write();
111735834612809 |   0) + 44.870 us   |          }
111735834613425 |   0)               |          __vma_link_rb() {
111735834613926 |   0)   0.502 us    |            vma_compute_subtree_gap();
111735834614912 |   0)   1.547 us    |          }
111735834615442 |   0)               |          copy_page_range() {
111735834616096 |   0)   0.498 us    |            _vm_normal_page();
111735834617137 |   0)   0.532 us    |            _vm_normal_page();
111735834618109 |   0)   0.474 us    |            _vm_normal_page();
111735834619077 |   0)   0.485 us    |            _vm_normal_page();
111735834620121 |   0)   0.496 us    |            _vm_normal_page();
111735834621183 |   0)   0.520 us    |            _vm_normal_page();
111735834622202 |   0)   0.504 us    |            _vm_normal_page();
111735834623218 |   0)   7.841 us    |          }
111735834623816 |   0)               |          cap_vm_enough_memory() {
111735834624297 |   0)   0.479 us    |            cap_capable();
111735834625187 |   0)   1.423 us    |          }
111735834625752 |   0)   0.551 us    |          cred_has_capability();
111735834626746 |   0)   0.493 us    |          __vm_enough_memory();
111735834627698 |   0)               |          vm_area_dup() {
111735834628159 |   0)               |            kmem_cache_alloc() {
111735834628644 |   0)   0.472 us    |              should_failslab();
111735834629579 |   0)               |              memcg_kmem_get_cache() {
111735834630009 |   0)   0.465 us    |                get_mem_cgroup_from_mm();
111735834630942 |   0)   1.390 us    |              }
111735834631464 |   0)               |              __slab_alloc() {
111735834631911 |   0)   0.596 us    |                ___slab_alloc();
111735834632974 |   0)   1.532 us    |              }
111735834633475 |   0)   0.485 us    |              memcg_kmem_put_cache();
111735834634432 |   0)   6.299 us    |            }
111735834634908 |   0)   7.231 us    |          }
111735834635414 |   0)   0.481 us    |          vma_dup_policy();
111735834636357 |   0)               |          anon_vma_fork() {
111735834636846 |   0)               |            anon_vma_clone() {
111735834637364 |   0)               |              kmem_cache_alloc() {
111735834637818 |   0)   0.438 us    |                should_failslab();
111735834638727 |   0)   0.550 us    |                memcg_kmem_get_cache();
111735834639766 |   0)   0.439 us    |                memcg_kmem_put_cache();
111735834640682 |   0)   3.378 us    |              }
111735834641196 |   0)   0.494 us    |              down_write();
111735834642173 |   0)               |              anon_vma_interval_tree_insert() {
111735834642713 |   0)   0.461 us    |                __anon_vma_interval_tree_augment_rotate();
111735834643595 |   0)   1.455 us    |              }
111735834665220 |   0)   0.527 us    |              up_write();
111735834666099 |   0) + 29.294 us   |            }
111735834666628 |   0)               |            kmem_cache_alloc() {
111735834667086 |   0)   0.489 us    |              should_failslab();
111735834668038 |   0)               |              memcg_kmem_get_cache() {
111735834668476 |   0)   0.473 us    |                get_mem_cgroup_from_mm();
111735834669450 |   0)   1.440 us    |              }
111735834669986 |   0)   0.496 us    |              memcg_kmem_put_cache();
111735834670915 |   0)   4.330 us    |            }
111735834671424 |   0)               |            kmem_cache_alloc() {
111735834671917 |   0)   0.476 us    |              should_failslab();
111735834672842 |   0)               |              memcg_kmem_get_cache() {
111735834673295 |   0)   0.441 us    |                get_mem_cgroup_from_mm();
111735834674209 |   0)   1.397 us    |              }
111735834674717 |   0)   0.474 us    |              memcg_kmem_put_cache();
111735834675617 |   0)   4.238 us    |            }
111735834676123 |   0)   0.494 us    |            down_write();
111735834677087 |   0)   0.518 us    |            anon_vma_interval_tree_insert();
111735834678065 |   0)   0.481 us    |            up_write();
111735834678938 |   0) + 42.638 us   |          }
111735834679493 |   0)               |          __vma_link_rb() {
111735834679976 |   0)   0.475 us    |            vma_compute_subtree_gap();
111735834681282 |   0)   0.527 us    |            vma_compute_subtree_gap();
111735834682226 |   0)   0.452 us    |            vma_compute_subtree_gap();
111735834683158 |   0)   0.486 us    |            vma_compute_subtree_gap();
111735834684261 |   0)               |            vma_gap_callbacks_rotate() {
111735834684777 |   0)   0.520 us    |              vma_compute_subtree_gap();
111735834685709 |   0)   1.543 us    |            }
111735834686138 |   0)   6.694 us    |          }
111735834686639 |   0)               |          copy_page_range() {
111735834687314 |   0)               |            __pte_alloc() {
111735834687805 |   0)               |              pte_alloc_one() {
111735834688233 |   0)   2.836 us    |                alloc_pages_current();
111735834691511 |   0)   0.421 us    |                inc_zone_page_state();
111735834692493 |   0)   4.738 us    |              }
111735834692951 |   0)   5.728 us    |            }
111735834693559 |   0)   0.496 us    |            _vm_normal_page();
111735834694541 |   0)   0.499 us    |            _vm_normal_page();
111735834695543 |   0)   0.490 us    |            _vm_normal_page();
111735834696592 |   0)   0.487 us    |            _vm_normal_page();
111735834697578 |   0)   0.476 us    |            _vm_normal_page();
111735834698540 |   0)   0.469 us    |            _vm_normal_page();
111735834699506 |   0)   0.468 us    |            _vm_normal_page();
111735834700475 |   0)   0.478 us    |            _vm_normal_page();
111735834701507 |   0)   0.512 us    |            _vm_normal_page();
111735834702489 |   0)   0.472 us    |            _vm_normal_page();
111735834703470 |   0)   0.481 us    |            _vm_normal_page();
111735834704459 |   0)   0.487 us    |            _vm_normal_page();
111735834705444 |   0)   0.481 us    |            _vm_normal_page();
111735834706500 |   0)   0.471 us    |            _vm_normal_page();
111735834707486 |   0)   0.469 us    |            _vm_normal_page();
111735834708522 |   0)   0.477 us    |            _vm_normal_page();
111735834709539 |   0)   0.488 us    |            _vm_normal_page();
111735834710523 |   0)   0.492 us    |            _vm_normal_page();
111735834711543 |   0)   0.490 us    |            _vm_normal_page();
111735834712522 |   0)   0.494 us    |            _vm_normal_page();
111735834713705 |   0) + 27.115 us   |          }
111735834714360 |   0)               |          vm_area_dup() {
111735834714818 |   0)               |            kmem_cache_alloc() {
111735834715282 |   0)   0.448 us    |              should_failslab();
111735834716211 |   0)               |              memcg_kmem_get_cache() {
111735834716640 |   0)   0.424 us    |                get_mem_cgroup_from_mm();
111735834717586 |   0)   1.380 us    |              }
111735834718112 |   0)               |              __slab_alloc() {
111735834718541 |   0)   0.600 us    |                ___slab_alloc();
111735834719631 |   0)   1.542 us    |              }
111735834720148 |   0)   0.496 us    |              memcg_kmem_put_cache();
111735834721065 |   0)   6.259 us    |            }
111735834721542 |   0)   7.230 us    |          }
111735834722048 |   0)   0.493 us    |          vma_dup_policy();
111735834722988 |   0)   0.486 us    |          anon_vma_fork();
111735834724091 |   0)   0.536 us    |          down_write();
111735834725083 |   0)               |          vma_interval_tree_insert_after() {
111735834726132 |   0)   0.538 us    |            vma_interval_tree_augment_rotate();
111735834727051 |   0)   2.013 us    |          }
111735834727537 |   0)   0.478 us    |          up_write();
111735834728498 |   0)               |          __vma_link_rb() {
111735834728997 |   0)   0.486 us    |            vma_compute_subtree_gap();
111735834729953 |   0)   0.495 us    |            vma_compute_subtree_gap();
111735834730945 |   0)   0.530 us    |            vma_compute_subtree_gap();
111735834731917 |   0)   0.471 us    |            vma_compute_subtree_gap();
111735834732871 |   0)   4.411 us    |          }
111735834733356 |   0)   0.473 us    |          copy_page_range();
111735834734365 |   0)               |          vm_area_dup() {
111735834734846 |   0)               |            kmem_cache_alloc() {
111735834735333 |   0)   0.513 us    |              should_failslab();
111735834736294 |   0)               |              memcg_kmem_get_cache() {
111735834736732 |   0)   0.433 us    |                get_mem_cgroup_from_mm();
111735834737629 |   0)   1.365 us    |              }
111735834738152 |   0)               |              __slab_alloc() {
111735834738584 |   0)   0.553 us    |                ___slab_alloc();
111735834740009 |   0)   1.496 us    |              }
111735834740514 |   0)   0.497 us    |              memcg_kmem_put_cache();
111735834741399 |   0)   6.579 us    |            }
111735834741895 |   0)   7.603 us    |          }
111735834742378 |   0)   0.436 us    |          vma_dup_policy();
111735834743245 |   0)   0.445 us    |          anon_vma_fork();
111735834744169 |   0)   0.465 us    |          down_write();
111735834745119 |   0)               |          vma_interval_tree_insert_after() {
111735834745684 |   0)   0.461 us    |            vma_interval_tree_augment_rotate();
111735834746705 |   0)   0.469 us    |            vma_interval_tree_augment_rotate();
111735834747583 |   0)   2.529 us    |          }
111735834748081 |   0)   0.486 us    |          up_write();
111735834749042 |   0)               |          __vma_link_rb() {
111735834749541 |   0)   0.508 us    |            vma_compute_subtree_gap();
111735834750564 |   0)               |            vma_gap_callbacks_rotate() {
111735834751051 |   0)   0.498 us    |              vma_compute_subtree_gap();
111735834751918 |   0)   1.415 us    |            }
111735834752359 |   0)   3.364 us    |          }
111735834752879 |   0)   0.488 us    |          copy_page_range();
111735834753873 |   0)               |          vm_area_dup() {
111735834754349 |   0)               |            kmem_cache_alloc() {
111735834754828 |   0)   0.452 us    |              should_failslab();
111735834755754 |   0)               |              memcg_kmem_get_cache() {
111735834756190 |   0)   0.434 us    |                get_mem_cgroup_from_mm();
111735834757117 |   0)   1.373 us    |              }
111735834757687 |   0)   0.474 us    |              memcg_kmem_put_cache();
111735834758590 |   0)   4.272 us    |            }
111735834759068 |   0)   5.242 us    |          }
`
