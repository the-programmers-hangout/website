---
authors:
  - "alearori#8661"
created_at: 2019/11/15
title: "Multidimensional Arrays"
---

## What is a multidimensional array?

To put simply, a multidimensional array is an array that contains another array of another array... of another array of objects. It is commonly used for making matricies, but it can also be used for storing information such as `string`.

The format of the container looks like:

`{{a1,a2,a3,...},{b1,b2,b3,...},{c1,c2,c3,...},...}`

Where `a1`,`a2`,`a3`, and etc. are objects of the data type that was array was declared to contain at the start.
But they can also be another array whch contains objects of said data type. Which looks like this:

`{{{a1,a2,a3,...},{b1,b2,b3,...},{c1,c2,c3,...},...},...}`

And we can keep going on and on, creating more arrays inside the arrays.

### How do we make one?

To create multidimensional array, you do it like a regular array but with a extra `[]` at the end.

#### Method 1:

Use

```c++
data_type array_name[A][B];
```

Where `data_type` is an data type(such as `int`, `char` or etc.), `array_name` is what the name of the array will be and `A` and `B` are non-negative integers, where `B` is the number of objects within that layer and `A` is the number of `B`'s within this array.

Example 1:

```c++
int arr[2][3];
```

This will make a empty 2x3 matrix that looks like:

```c++
{{0,0,0},{0,0,0}}
```

So there are 2 arrays with 3 elements each within the array `arr`.

#### Method 2:

Use:

```c++
data_type array_name[][] = {{a1,a2,a3,...},{b1,b2,b3,...}};
```

Where `data_type` is an data type(such as `int`, `char` or etc.), `array_name` is what the name of the array will be and `a1, a2, a3, b1, b2, b3,...` are objects of the data type that was chosen at the start in `data_type`, but the number of `a`'s and `b`'s must be equal.

Example 2:

```c++
int arr[][] = {{1,2,3},{4,5,6}};
```

This will make a 2x3 matrix with preset values instead of all 0's so it'll look like:

```c++
{{1,2,3},{4,5,6}}
```

#### Method 3:

Combine both:

```c++
data_type array_name[A][B] = {{a1,a2,a3,...},{b1,b2,b3,...}}
```

Where `data_type` is an data type(such as `int`, `char` or etc.), `array_name` is what the name of the array will be and `a1, a2, a3, b1, b2, b3,...` are objects of the data type that was chosen at the start in `data_type` and `A` and `B` is the number of `{}`'s and `a`'s and `b`'s respectively.

Example 3:

```c++
int arr[2][3] = {{1,2,3}, {4,5,6}};
```

This will make a 2x3 matrix that looks like:

```c++
{{1,2,3},{4,5,6}}
```

#### Note:

It is possible to go ever further, and so a declaration like `data_type array_name[A][B][C]` is possible and would add more layers to your array. So after going through one layer, you have to input the location of the next layer, and so on and so forth until you reach the deepest layer of the `{}` where you'll find the object.

Example 4:

```c++
int arr[2][3][4];
```

This will make an 2x3x4 matrix that looks like:

```c++
{{{0,0,0,0},{0,0,0,0},{0,0,0,0}},{{0,0,0,0},{0,0,0,0},{0,0,0,0}}}
```

## What can you do with it?

#### Calling objects

To get the object inside, you can call for the object inside a multidimensional array by putting a integer inside the `[]`.

So taking the array made in example 2 above:

```c++
int arr[2][3] = {{1,2,3}, {4,5,6}};
std::cout << arr[0][1];
```

This would output `2` because using array indicies, `2` is the object in position 1 of the 0th array.

You must put an integer in both `[]`, or else you will get an error.
There is no syntax to instantly view the whole array, but an easy way is to loop through the whole array and outputting it.

#### Reassigning objects

Like with a regular array, you can also reassign what object is being held inside a exact position using `=`
So let's take for example the array made in example 2 above, which looks like:

```c++
int arr[2][3] = {{1,2,3}, {4,5,6}};
arr[1][1] = 1337;
```

This would cause the array to change to looking like:

```c++
{{1,2,3},{4,1337,6}}
```

## Restrictions

1. The size is locked upon initialization. Once you make the array, its size is locked. For example, if you make a 2x3 array, and realize you need another column or row, you have to either make a new one, or change the size where you initialize it. If you want a dynamic size array, a array which you can change the size of, consider using `std::vector` instead.
2. There is no way to search except by iterating through each object in the entire array. For example, if you need to find the number `2` in:
   `{{1,2,3},{4,5,6}}`, you need to go through every element in the array, such as in a nested `for` loop, to find the position(s) where `2` is located.
3. No way to organize. Unlike with a `class`, you cannot designate a column with something like a name or title. For example, if you want to make one array store student IDs and their grade, you have to note that the first array is the student ID and second array is their grade.
4. No on-demand sorting. Unlike other containers, multidimensional arrays do not come with a built-in sorting function, such as highest to lowest or vice versa. It is stuck in that format unless you create your own sorting functions that take the array and sort it. Meanwhile, other standard library data structures such as `std::vector`, do have built in sorting functions, so you can use those opposed to an array.
5. Unlike with other container types, an array cannot hold anything other than the original data type, so if you declare it to be of data type `int` at the start, it cannot hold anything else except integers inside. If you're looking to store multiple data types, you should make a `class`, `struct` or use other container types like `std::map` that fulfill your requirement.
