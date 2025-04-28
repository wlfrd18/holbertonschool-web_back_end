#!/usr/bin/env python3
"""
0-async_generator.py

This module contains a coroutine that asynchronously yields
random numbers between 0 and 10, with a 1-second delay between each.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loops 10 times.
    Each iteration waits 1 second asynchronously,
    then yields a random float between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
