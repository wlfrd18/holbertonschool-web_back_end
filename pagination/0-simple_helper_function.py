#!/usr/bin/env python3
""" Pagination """

from typing import Tuple


def index_range(page: int = 1, page_size: int = 2) -> Tuple[int, int]:
    """ returns tuple of size two containing a start index and an end index """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
