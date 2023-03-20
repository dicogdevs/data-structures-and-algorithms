from binary_search import binary_search


def main():
    ARR = [1, 2, 3, 4]
    TARGET = 5
    RESULT = f'Target "{TARGET}" is in the arr at the position {binary_search(ARR, TARGET)}'
    print(RESULT)


if __name__ == '__main__':
    main()
