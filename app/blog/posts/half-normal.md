---
title: "Expectation of the Half-Normal Distribution"
date: "2026-01-25"
summary: "The half-normal distribution follows from folding a centered normal distribution onto the positive axis."
tags: ["Probability & Statistics"]
---

The half-normal distribution arises when we take a centered normal random variable and keep only its magnitude. It is often used as a non-negative prior in Bayesian learning and also naturally models the size of fluctuations in processes like Brownian motion.

Formally, if

$$ 
X \sim \mathcal N(0,\sigma^2) \tag{1}
$$

with probability density function:

$$
f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}
\exp\!\left(-\frac{x^2}{2\sigma^2}\right) \tag{2}
$$

then the random variable 

$$
Y = |X| \tag{3}
$$

is said to follow a half-normal disribution.

## Deriving the Expectation
The expectation of the half-normal distribution has a clear practical meaning. For example, if we think of Brownian motion as modeling random fluctuations like particle movement, the expectation tells us the typical absolute distance from the starting point at a given time.

By the definition of the expectation of a random variable

$$
\mathbb E[|X|]
= \int_{-\infty}^{\infty} |x| f_X(x)\,dx \tag{4}
$$

To integrate the absolute value of $x$, we split the integral at zero, resulting in

$$
\mathbb E[|X|] = \int_{-\infty}^0 (-x) f_X(x)\,dx + \int_0^{\infty} x f_X(x)\,dx \tag{5}
$$

Using the change of variables $u = -x$, the first integral becomes 

$$
\int_0^{\infty} u f_X(-u)\,du \tag{6}
$$

and since $$f_X(-u) = f_X(u)$$ due to the symmetry of the normal density, the two integrals are equal and hence 

$$
\mathbb E[|X|] =  \frac{2}{\sigma\sqrt{2\pi}}
\int_0^{\infty}
x \exp\!\left(-\frac{x^2}{2\sigma^2}\right) dx \tag{7}
$$

To evaluate this integral, we use the substitution

$$
u = \frac{x^2}{2\sigma^2} \tag{8}
$$

$$
du = \frac{x}{\sigma^2} dx
\quad \Rightarrow \quad \tag{9}
x\,dx = \sigma^2 du
$$

which results in

$$
\int_0^{\infty}
x e^{-x^2/(2\sigma^2)} dx
= \sigma^2 \int_0^{\infty}
e^{-u} du = \sigma^2 \tag{10}
$$

Plugging the result back into Equation (7)

$$
\mathbb E[|X|]
= \frac{2}{\sigma\sqrt{2\pi}} \cdot \sigma^2 = \sigma \sqrt{\frac{2}{\pi}} \tag{11}
$$

which concludes the derivation.

As expected, taking the absolute value of a symmetric variable shifts all the mass to the positive side, making the expectation positive but still slightly below the standard deviation. Intuitively, this reflects that the typical size is bigger than zero but still smaller than the full spread.
	​
