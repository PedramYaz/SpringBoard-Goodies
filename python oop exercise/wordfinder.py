"""Word Finder: finds random words from a dictionary."""

import random
class WordFinder:
    '''A way of getting a random word returned from a file full of words
    >>> w = WordFinder("/Users/pedramyazdani/Desktop/python work/python oop exercise/words.txt")
    "235886 words read"
    '''
    def __init__(self, path):
        'read the dictionary and tell me how many you read'

        dict_file = open(path)
        self.words = self.parse(dict_file)
        print(f"{len(self.words)} words read")
    
    def parse(self, dict_file):
        'part the file into list of words'
        return [w.strip() for w in dict_file]

    def random(self):
        'return a random word'
        return random.choice(self.words)


    
