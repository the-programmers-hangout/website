---
authors:
  - "T0M#5956"
created_at: 2019/11/14
updated_at: 2019/11/14
title: Basic Python Operators
---

## Python Operators

Python has 7 categories of operators: Arithmetic, assignment, comparison, logical, identity, membership and bitwise operators. In this article I will cover some of the operators seen most commonly in Python programming - arithmetic, assignment and comparison. Note: this article covers Python 3 and there have been alterations and additions of operators since Python 2, so some elements of this article may only apply to Python 3.

## Arithmetic Operators

Arithmetic operators are used in conjunction with numeric values in order to perform basic mathematical operations.

### Addition Operator - `+`

The addition operator is used to add two numeric values (can be hex, integers or floats), returning a base 10 number and can also be used to concatenate certain data types.

```python
1 + 4 # equals 5
1.1 + 1.1 # equals 2.2
0x100 + 0x100 # 512
'hello' + ' ' + 'word' # equals hello world
[1,3] + [2] # equals [1,3,2]
(1,1) + (2,2) # equals (1,1,2,2)
```

### Subtraction Operator - `-`

The subtraction operator is used to subtract two numeric values, subtracting the value on the left hand side operand from the operand on the right hand side (can be hex, integers or floats), returning a base 10 number.

```python
8 - 4 # equals 4
1.4 - 1.1 # equals 0.3
0x200 - 0x100 # 256
```

### Division Operator - `/`

The division operator is used to divide two numeric values, dividing the operand on the left hand side by the operand on the right hand side (can be hex, integers or floats), returning a base 10 number float.

```python
8 / 2 # equals 4.0
8 / 3 # 2.6666666666666665
10 / 1.1 # equals 9.09090909090909
0x200 / 0x10 # 32.0
```

### Modulus Operator - `%`

The modulus operator is used to divide two numeric values, dividing the operand on the left hand side by the operand on the right hand side (can be hex, integers or floats), and returning the remainder as a base 10 number.

```python
8 % 3 # equals 2
0x232 % 0xA # equals 2
1.1 % 0.3 # equals 0.2
```

### Power Operator - `**`

The power operator is used find the result of the left hand operand to the power of the right hand operand, returning a base 10 number. Either value can be a hex number, and integer or a float.

```python
 4 ** 10 # equals 1048576
 0x10 ** 0x4 # equals 65536
 1.1 ** 4.4 # equals 1.5209950991358059
```

### Floor Division - `//`

The floor division operator is used to find the result of the left hand operand divided by the right hand operand, rounded down to the nearest integer. Either value can be a hex number, and integer or a float. In floor division, `a // b` is the same as `int(a/b)`.

```python
5 // 2 # equals 2 - same as int(5/2)
0x100 // 0xA # equals 25
5.6 // 1.1 # equals 5
```

## Assignment Operators

### Assign Operator - `=`

Assigns right hand value to the left hand operand. Literals (such as integers and floats) cannot be assigned. The right hand value can be a large number of values such as literals and variables.

```python
a = 3 # variable a is now equal to 3
b = 4 * 2 # variable b is now equal to 8
c = b * 2 # variable c is now equal to value of variable b multiplied by 2, in this case c becomes 16
```

### Assign Operator and an Assignment Operator - e.g. `-=`

You can use the assign operator in conjunction with any of the above arithmetic operators using the syntax `operand {assignment operator}= operand`, such as `a //= 9`. This performs the relevant arithmetic operation on the two operands and then assigns the result to the left operand. In all below demonstrations, variable `a` starts equal to 10.

```python
a += 1 # a becomes 11
a -= 1 # a becomes 9
a *= 2 # a becomes 20
a /= 2 # a becomes 5
a %= 3 # a becomes 1
a **= 2 # a becomes 100
a //= 3 # a becomes 3
```

## Comparison Operators

### Equals Operator - `==`

Compares the two operands on either side of the operator, returning `True` if they are equal and `False` otherwise. Strict type comparison - a string version of `'8'` doesn't equal the integer `8`, therefore this operators acts as an identical operator.

```python
8 == 4 + 4 # equals True
a == a # equals True
9 == 3 + 5 # equals False
'8' == 8 # equals False
'hello' == 'hello' # equals True
[1,2] == [1,2] # equals True
```

### Not Equal Operator - `!=`

Compares the two operands on either side of the operator, returning `True` if they are not equal and `False` if they are equal. Strict type comparison, therefore this operators acts as a not identical operator.

```python
8 != 4 + 4 # equals False
8 != 3 + 3 # equals True
'8' != 8 # equals True
```

### Greater Than Operator - `>`

Checks whether the left hand operand is numerically larger than the right hand operand, returning `True` if it is and `False` otherwise. This operand can compare other data types, but always returns `False`.

```python
8 > 7 # returns True
7 > 7 # returns False
6 > 7 # returns False
'9' > '8' # returns False
'7' > '8' # returns False
```

### Lesser Than Operator - `<`

Checks whether the left hand operand is numerically smaller than the right hand operand, returning `True` if it is and `False` otherwise. This operand can compare other data types, but always returns `False`.

```python
7 < 9 # returns True
8 < 8 # returns False
9 < 9 # returns False
'9' < '10' # returns False
'7' < '6' # returns False
```

### Lesser/Greater or Equals Operator - `<=` or `>=`

Behaves similarly to their respective lesser/greater operators however also returns `True` if the left side and right side operands are the same. If non-numerical data types are used, this operator only returns `True` when the operands are identical.

```python
7 <= 7 # returns True
7 >= 7 # returns True
9 >= 8 # returns True
8 <= 9 # returns True
9 >= 10 # returns False
```

## Operators Precedence

Python operators are performed in the following order, with the highest operators on the list being performed before the lower operators. If the operators are on the same row on the list (meaning they have the same levels of precedence), the operators are performed with the reading left to right on the line of code.

- `**`
- `~`, `+`, `-`
- `*`, `/`, `%`, `//`
- `+`, `-`
- `>>`, `<<`
- `&`
- `^`, `|`
- `<=`, `<`, `>`, `>=`
- `==`, `!=`
- `=`, `%=`, `/=`, `//=`, `-=`, `+=`,`*=`, `**=`
- `is`, `is not`
- `in`, `not in`
- `not`, `or`, `and`

### Example of Operator Precendence

If you wanted to execute the line of code `2 ** 2 * 4 / 2` in Python, the code would be executed like so. First, the power (`**`) operator would be executed first as it is the most precedent and therefore takes highest priority, this makes the line of code equal to:

```python
2 ** 2 * 4 / 2
4 * 4 / 2
```

Next, due to the multiplication `*` and division `/` operators having the same precedent, they are executed left to right, with the multiplication operator first and then the division operator because that is the order they appear left to right in the line of code, meaning the code would be executed as following:

```python
4 * 4 / 2
16 / 2
8
```
