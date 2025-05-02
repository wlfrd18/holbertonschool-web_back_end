#!/usr/bin/env python3
"""
0-async_generator

This module contains a coroutine that asynchronously yields
random numbers between 0 and 10, with a 1-second delay between each.
"""
from typing import AsyncGenerator
import asyncio
import random


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Coroutine that loops 10 times.
    """
    for number in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
