#!/usr/bin/env python3
"""
Complex types - mixed list
"""
from typing import List


def sum_mixed_list(mxd_list: List[int | float]) -> float:
    """
    type-annotated function sum_mixed_list which takes a list mxd_lst
    of integers and floats and returns their sum as a float.
    Remark: From Python ealier than 3.9+, we use typing.Union only
    list[Union[int | str]]
    """
    sum: float = 0.0
    for number in mxd_list:
        sum += float(number)
    return sum