def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """

    new_list = [val for val in lst if val]

    return new_list


    # new_list = []
    # for values in lst:
    #     if values == True:
    #         new_list.append(values)

    # return new_list
