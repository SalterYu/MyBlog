---
title: 谈谈软件熵
date: 2020年04月22日
---

## 谈谈软件熵

#### 何为软件熵
   软件熵（Software entropy）是指软件的无序程度。软件熵可用来说明软件在经过不断修改后，无序程度提高的现象。这是不可避免的情况。

#### 为什么会产生
1. 最先接手项目的人因为一时偷懒图方便增加代码无序性。
2. 在无序性项目中的各种迭代，以至于有太多的逻辑判断和冗余代码。
3. 当时开发的人的习惯或者心理状况。
   例如: 很多元素可以崔进软件腐烂，其中最重要的一个似乎是开发项目时的心理（或文化），即使你的团队只有你一个人，你开发项目时的心理也可能是非常微妙的事情。尽管制定了最好的计划，拥有最好的开发者，项目在其生命周期中仍可能遭遇毁灭和衰败，而另一些项目，尽管遇到巨大的困难和接连而来的挫折，却成功的击败自然的无序倾向，设法取得相当好的结果。（这段内容来自互联网）
4. 有人在一段风格整洁的项目中，放了一个污点，然后后人由于不了解原因则进行迭代将这个污点越扩越大。
5. 不同人的开发习惯。

#### 会产生什么后果
1. 代码越来越复杂。
2. 项目越来越难维护。
3. 改动一处就出现奇奇怪怪的bug。明明自己没改过这地方。
4. 会给之后的迭代造成不必要的麻烦。
5. 后期开发成本逐渐上升，投入的资源也会增加。
6. 之后维护的人心里也会发生变化。
7. 当熵值达到一定程度会不可逆，最终只好重构。

#### 如何避免
1. 有一套良好的编码规范。
2. 严格遵守这一套规范。（一旦有人不遵守，就会出现严重的恶化）
3. 框架使用要恰当。
4. 设计模式要多利用。
5. 编码之前多考虑是否有更好的办法来解决，而不是靠复杂的逻辑判断。例如：函数式编程，封装等。
6. 代码重构（能不重构就不重构）
7. 在各种解决方案中做权衡。

#### 总结
我们编程的过程，实际上就是不断地向系统输入规则的过程。通过这些规则，我们将系统的运行状态限制在那些我们认为正确的状态上（即有序状态）。
因此，避免系统出现那些不合法的、额外的状态（即混乱状态），是我们应该竭力去做的，哪怕那些状态初看起来是“无害”的。避免它，也是对我们能力的一种提升。