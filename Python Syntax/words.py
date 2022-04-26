def print_upper_words(words):
    ''' function accepts words, that is than converted to all uppercase '''
    for word in words:
        print(word.upper())

def print_upper_words2(words):
    '''print each word on a seperate line uppercased, only if it starts with an e'''
    for word in words:
        if word.startswith('e') or word.startwith('E'):
            print(word.upper())

def print_upper_words3(words, must_start_with):
    '''print each word on a seperate line uppercased, only if it starts with the letter that the user specifies'''
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break