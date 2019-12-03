import ijson
import io
import json

keyword = input("Enter keyword: ")
jdata = json.loads(open("tags.json").read())
'''for x in range (1,2223):
    transcript = jdata[0].get(str(x)).get("transcript")
    if(keyword in transcript):
        print(jdata[0].get('"' + str(x) + '"').get("img"))'''

x=1
y=2
print(f"'{x}'")
print(jdata[1].get('2'))