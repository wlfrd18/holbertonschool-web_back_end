#!/usr/bin/env python3
"""
2-measure_runtime

this module contains a function that measure
run time for 4 parralle asynchronous comprehension
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    measure total runtime of 4 async comprehension in parallel
    """
    start = time.perf_counter()
    tasks = [async_comprehension() for n in range(4)]

    await asyncio.gather(*tasks)

    end = time.perf_counter()

    elapsed_time = end - start

    return elapsed_time
