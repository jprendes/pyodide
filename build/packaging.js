var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="packaging.data";var REMOTE_PACKAGE_BASE="packaging.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}});return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","site-packages",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","packaging",true,true);Module["FS_createPath"]("/lib/python3.9/site-packages","packaging-21.0-py3.9.egg-info",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:63631,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1275,2109,3309,4708,5966,7131,8530,9913,10882,12089,13210,14397,15529,16851,18167,19379,20367,21267,22413,23676,24682,25477,26686,27717,28698,29839,31060,32092,33152,34362,35576,36914,38239,39435,40524,41643,42730,43681,45068,46229,47493,48347,49431,50635,51550,52571,53991,55065,56461,57700,58863,60018,61308,62658],sizes:[1275,834,1200,1399,1258,1165,1399,1383,969,1207,1121,1187,1132,1322,1316,1212,988,900,1146,1263,1006,795,1209,1031,981,1141,1221,1032,1060,1210,1214,1338,1325,1196,1089,1119,1087,951,1387,1161,1264,854,1084,1204,915,1021,1420,1074,1396,1239,1163,1155,1290,1350,973],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_packaging.data")}Module["addRunDependency"]("datafile_packaging.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/site-packages/packaging/__about__.py",start:0,end:661,audio:0},{filename:"/lib/python3.9/site-packages/packaging/__init__.py",start:661,end:1158,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_manylinux.py",start:1158,end:12646,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_musllinux.py",start:12646,end:17024,audio:0},{filename:"/lib/python3.9/site-packages/packaging/_structures.py",start:17024,end:18653,audio:0},{filename:"/lib/python3.9/site-packages/packaging/markers.py",start:18653,end:27128,audio:0},{filename:"/lib/python3.9/site-packages/packaging/requirements.py",start:27128,end:31792,audio:0},{filename:"/lib/python3.9/site-packages/packaging/specifiers.py",start:31792,end:62756,audio:0},{filename:"/lib/python3.9/site-packages/packaging/tags.py",start:62756,end:78470,audio:0},{filename:"/lib/python3.9/site-packages/packaging/utils.py",start:78470,end:82670,audio:0},{filename:"/lib/python3.9/site-packages/packaging/version.py",start:82670,end:97335,audio:0},{filename:"/lib/python3.9/site-packages/packaging/py.typed",start:97335,end:97335,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/PKG-INFO",start:97335,end:110718,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/SOURCES.txt",start:110718,end:112472,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/dependency_links.txt",start:112472,end:112473,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/requires.txt",start:112473,end:112490,audio:0},{filename:"/lib/python3.9/site-packages/packaging-21.0-py3.9.egg-info/top_level.txt",start:112490,end:112500,audio:0}],remote_package_size:67727,package_uuid:"8c3a9bab-1fe5-4f45-9065-819ddcd73914"})})();