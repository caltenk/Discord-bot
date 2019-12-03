import requests
import json
import os


# https://www.xkcd.com/num/info.0.json

def getJson(num):

    num = int(num)

    url = "https://www.xkcd.com/" + str(num) + "/info.0.json"

    print(url)

    data = requests.get(url)
    dataJson = json.loads(json.dumps(data.json()))


    newJson = {dataJson["num"]: {"title": dataJson["title"], "alt": dataJson["alt"], "transcript": dataJson["transcript"], "img": dataJson["img"]}}

    return newJson


def writeJson(inputJson, num):
    with open('tags.json', 'w', encoding='utf-8') as outfile:
        json.dump(inputJson, outfile, ensure_ascii=False, indent=4)
        outfile.write("AKDJASOFJAIOPFAIOFJL")


def main():

    data = []
    # num = input("Enter xkcd comic number: ")
    # writeJson(getJson(num), num)
    # print(getJson(num))


    for x in range (1,10):
        with open('test.json') as data_file:
            data=json.load(data_file)
            data.append(getJson(x))
            with open('test.json', 'w') as outfile:
                json.dump(data, outfile)


    

if __name__ == "__main__":
    main()
