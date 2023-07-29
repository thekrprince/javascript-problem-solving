# Big O Notation

## What's Big O and Why is it important?

Let's understand this using a painless example. There are numerous students in a class and in their final exams they all will be getting a same question but surely there answers will be different. Some would be explaining it in pretty good way and some will explain in awful way and someone's explanation might be just ok. So the main point over here is that each and everyone is solving the question but the ways are different.

So, in the same way programmers solution to a problem varies. But why is it so important?
We're solving the problem which produces the correct output, isn't that enough?
The answer is **Big NO**.

There can be a one or two or even multiple valid implementation of the same function. Some might use loop, the other one can use list or string or something else to achieve the same task, then how do we know which one is best?
That's what Big O is about. It's way of generalizing code and talking about it and comparing code and it's performance to other pieces of code.
We can give labels to our code using Big O notation.

I know that the solution we come up with we think is best but when we're working in a big company and working with huge datasets, let's say 100 of millions of pieces of data where one **algorithm** implementation could save an hour every time it runs compared to another implementation.

**Performance** matters at that point.

**Big O** is a predominant topic when it's come to discussing trade-offs b/w different approaches.
When our code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.
More or less, it comes up in **interviews!!**

## When evaluating a program, what should be the major concern?

- Is it **fast?**
- **Less memory** intensive?
- More **readable**?

Any guess?

Major Focus will be on the **execution speed**, means if it's fast or not. If you guessed it right then great.

When we write a **program** and execute it on our machine or execute the same program in different machine, will the timing gonna be same or different? Yeah, you're right,
the timing will differ.

Rather than **counting** time(seconds). Let's count the number of simple operations the computer has to perform because it remains constant no matter what computer you're on.

```javaScript
function addUpto (n) {
    return n*(n+1)/2;
}
```

In this program total **3 operations**

- 1 division
- 1 multiplication
- 1 addition
  
are happening regardless of the size of **n**.
Whether **n** is **2** or **n** is **billion**, it doesn't really matter because the operation is gonna be **3** always. So, we can say that it's **Time complexity** is **O(1)**.

```javaScript
function addUpto(n) {
    let total = 0;
    for (let i=1; i<=n; i++) {
        total += 1;
    }
    return total:
}
```

In this program, there is gonna be more **operations**. The **+** operation will be performed a/c to the value of **n**. If **n** is **1** then addition will happen **one time** but if n is **100** then addition will happen **100 times**.
Here, **Time complexity** is **O(n)**.

**Big O** notation is a way to normalize **fuzzy counting**. It allows us to talk formally about how the **runtime** of an **algorithm** grows as the input grow.
We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a **constant times f(n)**, as n increases. When talking about **Big O**, we are talking about the **worst case scenario**.

### Constants don't matter

- O(2n) = O(n)
- O(500) = O(1)
- O(13n^2) = O(n^2)

### Smaller terms also don't matter

- O(n+10) = O(n)
- O(100n + 50) = O(n)
- O(n^2+5n+4) = O(n^2)

### Analyzing complexity with Big O can get complicated, few points which can help are as below-

- Arithmetic operations are constant.
- Variable assignment is constant.
- Accessing elements in an array(by index) or object(key) is constant.
- In a loop, the complexity is the length of the
loop.

### Here are five Big O run times, sorted from fastest to slowest:

- **O(1)**
- **O(log n)**
- **O(n)**
- **O(n log n)**
- **O(n^2)**

## Conclusion-

Algorithm speed isn't measured in seconds, but in growth of the number of operations. Instead, we talk about how quickly the run time of an algorithm increases as the size of the input increases. Run time of algorithms is expressed in Big O notation.
