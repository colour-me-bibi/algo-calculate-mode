

from collections import Counter


def calculate_mode(arr):
    """
    Returns the most common elements in a list.

    Args:
        arr (list): A list of elements.

    Returns:
        list: A list of the most common elements.
    """

    if not arr:
        return None

    return Counter(arr).most_common(1)[0][0]
