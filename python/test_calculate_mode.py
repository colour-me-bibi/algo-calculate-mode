
from calculate_mode import calculate_mode

import unittest


class TestCalculateMode(unittest.TestCase):
    def test_calculate_mode(self):
        self.assertEqual(calculate_mode([1, 2, 3, 4, 5]), 1)
        self.assertEqual(calculate_mode([1, 2, 3, 3, 4, 5]), 3)
        self.assertEqual(calculate_mode([1, 2, 3, 3, 3, 4, 5]), 3)
        self.assertEqual(calculate_mode([1, 2, 3, 3, 3, 3, 4, 5]), 3)
