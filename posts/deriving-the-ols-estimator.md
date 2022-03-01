---
id: 1
title: Deriving the OLS Estimator
date: '2020-12-21'
tags: [1,3,4]
category: [1, 2]
draft: false
summary: 'How to derive the OLS Estimator with matrix notation and a tour of math typesetting using markdown with the help of KaTeX.'
---

# Introduction
Hi, my name is Pedro, and this is all my function. This is the video number five of a series I'm creating to teach you about data visualization. If you didn't check them out before, please go and watch them right now. This video is going to be to explain the rules Oops in SVGs and HTML in general.

Right? Usually you separate your code in DIVS, or if you use react, you separate them in fragments. So you have things separated logically in your code. On SVGs, we have something called groups that are the tag G on the SVG. And it's very important for you to understand this concept because you're going to use it to separate our chart.

When we create our own charts using the three or Viz or any other library, let's see how it works. Right. So here we have a basic bar chart that has y and an X axis and has all the bars. So think about groups. You have to think that each one of these parts is actually a group.

So this thing here is a group. So the y axis is a group, the X axis is actually a group, and the bars are actually a group. Then you can separate them and you can actually check them separated on your code so they make more sense. And in the end, you can put them together on any chart. And the nice thing about it is that, for example, I can create a chart that is not actually a bar chart.

So this is the bar chart, but I can create one that is, I don't know, like a line chart here.

So you can separate the code like this. And it's going to be way easier for you to create new charts in the future. I know that if you are a software engineer for a long time and you're learning data visualizations now, you already know this concept, but that's really important for people that are starting to learn Web development right now and they don't know how to separate their code. And I think that it helps everyone to get a literal reminder of what we should do. I hope you like it.


Parsing and display of math equations is included in this blog template. Parsing of math is enabled by `remark-math` and `rehype-katex`.
KaTeX and its associated font is included in `_document.js` so feel free to use it on any page.
^[For the full list of supported TeX functions, check out the [KaTeX documentation](https://katex.org/docs/supported.html)]

Inline math symbols can be included by enclosing the term between the `$` symbol.

Math code blocks are denoted by `$$`.

If you intend to use the `$` sign instead of math, you can escape it (`\$`), or specify the HTML entity (`&dollar;`) [^2]

Inline or manually enumerated footnotes are also supported. Click on the links above to see them in action.

[^2]: \$10 and &dollar;20.

# Deriving the OLS Estimator

Using matrix notation, let $n$ denote the number of observations and $k$ denote the number of regressors.

The vector of outcome variables $\mathbf{Y}$ is a $n \times 1$ matrix,

```tex
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
```

$$
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
$$

The matrix of regressors $\mathbf{X}$ is a $n \times k$ matrix (or each row is a $k \times 1$ vector),

```latex
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
```

$$
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
$$

The vector of error terms $\mathbf{U}$ is also a $n \times 1$ matrix.

At times it might be easier to use vector notation. For consistency, I will use the bold small x to denote a vector and capital letters to denote a matrix. Single observations are denoted by the subscript.

## Least Squares

**Start**:  
$$y_i = \mathbf{x}'_i \beta + u_i$$

**Assumptions**:

1. Linearity (given above)
2. $E(\mathbf{U}|\mathbf{X}) = 0$ (conditional independence)
3. rank($\mathbf{X}$) = $k$ (no multi-collinearity i.e. full rank)
4. $Var(\mathbf{U}|\mathbf{X}) = \sigma^2 I_n$ (Homoskedascity)

**Aim**:  
Find $\beta$ that minimises the sum of squared errors:

$$
Q = \sum_{i=1}^{n}{u_i^2} = \sum_{i=1}^{n}{(y_i - \mathbf{x}'_i\beta)^2} = (Y-X\beta)'(Y-X\beta)
$$

**Solution**:  
Hints: $Q$ is a $1 \times 1$ scalar, by symmetry $\frac{\partial b'Ab}{\partial b} = 2Ab$.

Take matrix derivative w.r.t $\beta$:

```tex
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
```

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$