#!/usr/bin/env python3
"""Simple pagination module."""
import csv
import math
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Returns a tuple of the start and end index for pagination."""
    start = (page - 1) * page_size
    end = start + page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the correct page of the dataset."""

        # Validate arguments
        assert isinstance(page, int) and page > 0, "Page must be a positive"
        assert isinstance(page_size, int) and page_size > 0, "positive"

        # Get the dataset
        dataset = self.dataset()

        # Use index_range to find the correct indices
        start, end = index_range(page, page_size)

        # Return the appropriate page, or an empty list
        if start >= len(dataset):
            return []

        return dataset[start:end]
