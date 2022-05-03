import random
from wordfinder import WordFinder
class SpecialWordFinder(WordFinder):
    'finding words that meet our criteria of no # at the start'

    def parse(self, dict_file):
        return [w.strip() for w in dict_file if w.strip() and not w.startswith('#')]