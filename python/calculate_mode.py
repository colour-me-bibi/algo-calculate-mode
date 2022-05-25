

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

    counts = Counter(arr)
    _, max_count = counts.most_common(1)[0]

    return [el for el, count in counts.items() if count == max_count]
