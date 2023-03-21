import math


def binary_search(arr: list, target: int) -> int:
    if len(arr) == 0:
        return -1

    left = 0
    right = len(arr) - 1

    while (left <= right):
        MID = math.floor((left + right) / 2)
        GUESS = arr[MID]

        if GUESS == target:
            return MID
        if (GUESS > target):
            right = MID - 1
        else:
            left = MID + 1

    return -1
