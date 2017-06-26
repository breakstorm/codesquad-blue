#!/bin/bash
echo "몇 단?"
read n
if [ $n -gt 5 ]
then
	echo "$n";
else
	echo "not good"
fi

