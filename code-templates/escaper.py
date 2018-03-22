#!/usr/bin/python
import sys

myfile = open(sys.argv[1], 'r')
lines = myfile.readlines()

lines = [l.replace("\\","\\\\") for l in lines]	#escapes backslashes
lines = [l.replace("\"","\\\"") for l in lines]	#escapes double quotes
lines = [l.replace("\n","") for l in lines]	#removes newlines

string = "\\n".join(lines)	#adds escaped newlines
string = "\""+string+"\""

print (string)
