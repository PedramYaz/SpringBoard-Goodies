def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    yo1 = str(num1)
    yo2 = str(num2)
    length1 = len(yo1)
    length2 = len(yo2)

    if length1 == length2:
        return True
    else:
        return False


# def freq_counter(coll):
#     """Returns frequency counter mapping of coll."""

#     counts = {}

#     for x in coll:
#         counts[x] = counts.get(x, 0) + 1

#     return counts


# def same_frequency(num1, num2):
#     """Do these nums have same frequencies of digits?

#         >>> same_frequency(551122, 221515)
#         True

#         >>> same_frequency(321142, 3212215)
#         False

#         >>> same_frequency(1212, 2211)
#         True
#     """

#     return freq_counter(str(num1)) == freq_counter(str(num2))
