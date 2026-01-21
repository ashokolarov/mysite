---
title: "The Bernoulli-Poisson Relationship"
date: "2026-01-16"
summary: "I build intuition on how the Poisson distribution arises naturally by viewing it as the limit of many rare, independent Bernoulli events as time is divided more and more finely."
tags: ["Probability & Statistics"]
---

One of the most elegant results in probability theory is how the Binomial distribution converges to the Poisson distribution under the right conditions. Conceptually and mathematically, it explains why the Poisson process is the “right” model for random arrivals. But what does this relationship tell us and could we derive an intuition behind it?

## The Bernoulli Process
Imagine time broken into many tiny pieces: seconds, milliseconds, or even smaller. In each small interval, an event might happen. A radioactive atom decays, a customer walks into a store, or a large market order arrives at an exchange. From on outside perspective, each interval looks the same:

- The event either happens or it does not
- The probability of the event occurring is small
- What happens in one interval does not affect the others

This is nothing more than a **Bernoulli trial**. If we look at $n$ such intervals and count how many events occur, the total number of events follows a Binomial distribution:
$$
P(X=k)=\binom{n}{k}p^{k}(1−p)^{n−k} \tag{1}
$$

Intuitively, if we flip $n$ coins each with bias $p$, Equation 1 gives the probability of $k$ successes. But we can also ask a different, equally natural question: **How long do we have to wait until the next event occurs**?

In discrete time, waiting means counting how many intervals pass before the first success. Since each interval is an independent Bernoulli trial with success probability $p$, the waiting time $T$ follows a geometric distribution:

$$
P(T=k) = (1-p)^{k-1}p, k=1,2,...
$$

This formula reflects the structure of the process: the event fails to occur for $k-1$ consecutive intervals and then happens in the $k$-th interval. Crucially, the probability of success in the next interval does not depend on how long we have already waited. In probability theory, this property is known as **memorylessness**.

So far, everything is discrete, simple, and intuitive.

## The Limiting Case
As we decrease the size of each time slice, the number of slices $n$ increases while the probability of an event in a single slice $p$ decreases. We are not changing the underlying system, but only how closely we look at it. To reflect this, we can keep the expected number of events over the full time window fixed by setting:

$$
np=\lambda \tag{2}
$$

The parameter $\lambda$ represents the average activity level of the system. This constraint is crucial. Without it, shrinking time would either make events disappear or pile up unrealistically.

As the time slices become smaller and smaller, the artificial structure we imposed on time fades away. In this limit, the system no longer looks discrete, but instead continuous. Let's see what happens to the Binomial probability mass function under these conditions. We start with Equation 1, setting $p = \lambda/n$ and expanding the binomial coefficient:
$$
P(X = k) = \frac{n!}{k!(n-k)!} \left(\frac{\lambda}{n}\right)^k \left(1-\frac{\lambda}{n}\right)^{n-k} \tag{3}
$$
Let's rearrange and take the limit as $n \to \infty$:
$$
P(X = k) = \frac{n(n-1)(n-2)\cdots(n-k+1)}{n^k} \cdot \frac{\lambda^k}{k!} \cdot \left(1-\frac{\lambda}{n}\right)^{n} \cdot \left(1-\frac{\lambda}{n}\right)^{-k} \tag{4}
$$
What we can see is that:

- The first term: $$\frac{n(n-1)\cdots(n-k+1)}{n^k} \to 1$$
- The third term: $$\left(1-\frac{\lambda}{n}\right)^{n} \to e^{-\lambda}$$ (by the definition of *e*)
- The fourth term: $$\left(1-\frac{\lambda}{n}\right)^{-k} \to 1$$

Putting it all together:
$$
P(X=k) \to \frac{\lambda^{k}e^{-\lambda}}{k!} \tag{5}
$$

This is precisely the Poisson distribution with parameter $\lambda$! This shows how, in the mathematical limit, the discrete structure of the Bernoulli process disappears, and the Poisson law emerges as the continuous-time counterpart that preserves the expected number of events.

We can simulate this numerically as well. The figure provides a visual confirmation of the theory: as the number of trials $n$ increases and the success probability $p$ decreases to keep $\lambda=np$ constant, the Binomial distribution (blue bars) gradually aligns with the Poisson distribution (green bars).

![Poisson distribution plot](/figs/poisson-plot.png)

## What Does This Mean?
Once we accept this limit, the Poisson process becomes much more intuitive. Each of its key properties emerges naturally from the Bernoulli process:

- **Counts in disjoint intervals are independent**: In the Bernoulli world, events in separate time slices are independent by construction. As we shrink the time intervals, this independence persists, meaning that the number of events in non-overlapping periods remains independent in the limit.

- **The expected number of events grows linearly with time**: Each tiny interval contributes a small probability $p=\lambda/n$ of an event. Summing over $n$ intervals gives an expected total of $\lambda$ events per time window. If we double the length of the time window, we double the number of intervals and therefore double the expected count. This linearity arises directly from how we scaled the Bernoulli trials.

- **Waiting times between events become exponential**: In discrete time, the number of intervals until the next success follows a geometric distribution. As the interval size shrinks and $n \to \infty$, the geometric distribution converges to the exponential distribution, giving the Poisson process its memoryless interarrival times.

None of these properties are assumptions added on top of the model. They are inherited automatically from the simple, independent Bernoulli trials we started with. This makes the Poisson process not just mathematically convenient, but a natural description of random arrivals when we zoom in on time and treat events as rare and independent. In this sense, the Poisson model is not imposed on reality, but naturally emerges from it.


