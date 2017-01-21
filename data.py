import csv
import json
dataFile = open("crimeData.csv", "rU")
reader = csv.reader(dataFile)
aList = []
for row in reader:
    aList.append({"type" : row[0], "latitude" : row[7], "longitude" : row[8]})

dataFile.close()

jSonFile = open("finalData.json", "w")
json.dump(aList, jSonFile)
jSonFile.close()