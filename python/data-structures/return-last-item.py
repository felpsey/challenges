"""
A function that returns the last value of the last item in a list or string.

__author__ = "Ethan Phelps"
__version__ = 28.12.22
__challenge__ = "https://edabit.com/challenge/mcC546MLnBjNLXTb8"
"""

def last_ind(item_collection):
    """
    Returns the last value of the last item in a given list or string

    :param item_collection: A list or string
    :returns: Last value of the last item of item_collection or 'None' if input is empty
    """

    item_collection_len = len(item_collection)

    if (item_collection_len <= 0):
        return None
    else:
        # Get the last item at index (item_collection_len - 1)
        return item_collection[item_collection_len - 1]