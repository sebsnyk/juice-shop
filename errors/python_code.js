# This is Python code, not JavaScript.
import sys
import json

class DataProcessor:
    """A simple class example"""
    def __init__(self, name):
        self.name = name
        self._internal_data = []

    def add_item(self, item):
        if isinstance(item, dict):
            self._internal_data.append(item)
            print(f"Added item to {self.name}")
        else:
            print("Invalid item type", file=sys.stderr)

    def get_summary(self):
        # Using list comprehension
        count = len([x for x in self._internal_data if x.get("value", 0) > 10])
        return {"processor": self.name, "count_gt_10": count}

processor = DataProcessor("Python Test")
processor.add_item({"id": 1, "value": 5})
processor.add_item({"id": 2, "value": 15})
print(json.dumps(processor.get_summary()))
