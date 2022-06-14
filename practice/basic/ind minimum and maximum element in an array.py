# Find minimum and maximum element in an array

def getMinMax( a, n):
  min_val, max_val = float('inf'), 0

  for num in a:
    min_val = min(min_val, num)
    max_val = max(max_val, num)

  return [min_val, max_val]