import matplotlib.pyplot as plt
import numpy as np
import scienceplots
from scipy.stats import binom, poisson

# Set style
plt.style.use(("science", "no-latex"))

fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Fixed lambda (rate parameter)
lambda_val = 5

# Different values of n to show convergence
n_values = [10, 50, 100, 500]

for idx, (ax, n) in enumerate(zip(axes.flat, n_values)):
    # Calculate p such that np = lambda
    p = lambda_val / n

    # Generate k values
    k_max = min(int(lambda_val * 3), n)
    k = np.arange(0, k_max + 1)

    # Calculate probabilities
    binom_pmf = binom.pmf(k, n, p)
    poisson_pmf = poisson.pmf(k, lambda_val)

    # Plot
    width = 0.35
    x = np.arange(len(k))

    ax.bar(
        x - width / 2,
        binom_pmf,
        width,
        label=f"Binomial(n={n}, p={p:.4f})",
        alpha=0.7,
        color="#3b82f6",
        edgecolor="black",
        linewidth=0.5,
    )
    ax.bar(
        x + width / 2,
        poisson_pmf,
        width,
        label=f"Poisson(λ={lambda_val})",
        alpha=0.7,
        color="#10b981",
        edgecolor="black",
        linewidth=0.5,
    )

    ax.set_xlabel("Number of Events (k)", fontsize=16)
    ax.set_ylabel("Probability", fontsize=16)
    ax.set_title(f"n = {n}, p = λ/n = {p:.4f}", fontsize=17, fontweight="semibold")
    ax.legend(fontsize=14)
    ax.grid(True, alpha=0.3)
    ax.set_xticks(x[:: max(1, len(x) // 10)])
    ax.set_xticklabels(k[:: max(1, len(x) // 10)])


plt.tight_layout()
plt.savefig("poisson-plot.png", dpi=300, bbox_inches="tight", transparent=True)

plt.show()
