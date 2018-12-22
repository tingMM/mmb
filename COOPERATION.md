# 关于多人协作开发

## 一、分支介绍

### 1、组长分支

master：主分支，项目的最终版本存放在该分支中

dev：开发分支

gh-pages：项目预览分支

### 2、组员分支

master：主分支，用于pull或者fetch组长的分支

xxxx：以自己名字首字母缩写命名的分支，自己实际开发的分支



## 二、协作开发

1. 各组员先fork该仓库到自己的远程仓库中

2. clone到自己的本地仓库

   ```shell
   # 例如：
   git clone https://github.com/oyzz1234/mmb.git
   ```

3. 添加组长的远程仓库地址

   ```shell
   # 复制下面这行代码即可
   git remote add  upstream https://github.com/Yggdrasill-7C9/mmb.git 
   
   # 检查是否添加成功：如果显示如下及证明成功添加上游仓库
   git remote -v 
   # origin	https://github.com/oyzz1234/mmb.git (fetch)
   # origin	https://github.com/oyzz1234/mmb.git (push)
   # upstream	https://github.com/Yggdrasill-7C9/mmb.git (fetch)
   # upstream	https://github.com/Yggdrasill-7C9/mmb.git (push)
   ```

4. 组员在写好一个模块后，必须及时commit，并且commit信息不能随便乱写，一定要写好备注，以便其他成员及组长能一目了然的看懂你修改过的文件

   ```shell
   # 1、首先检查自己代码的状态
   git status 
   # ==================================
   On branch master                                                           
   Your branch is ahead of 'origin/master' by 31 commits.                     
     (use "git push" to publish your local commits)                           
                                                                              
   Changes not staged for commit:                                             
     (use "git add ..." to update what will be committed)               
     (use "git checkout -- ..." to discard changes in working directory)
                                                                              
           modified:   mmv-dev/oyzz_youhuiquan.html                           
                                                                              
   Untracked files:                                                           
     (use "git add ..." to include in what will be committed)           
                                                                              
           mmv-dev/oyzz_youhuiquanlingqu.html                                 
                                                                              
   no changes added to commit (use "git add" and/or "git commit -a")
   # ==================================
   # 以oyzz的代码为例：
   # modified：表示已经更改过的代码
   # Untracked files:  表示为被追踪的代码，即没有被add过，这个时候需要add一下
   
   # 2、检查完自己代码状态之后，add你要提交的代码到 Storage Area
   git add mmv-dev/oyzz_youhuiquan.html    
   git add mmv-dev/oyzz_youhuiquanlingqu.html 
   
   # 3、确认你的代码已经修改完毕后，commit 你的代码到本地仓库，并注明你修改的信息
   git commit -m 'oyzz添加了xxx功能，实现了xxxx模块，修复了xxx bug'
   
   # 4、commit 代码之后，已经要拉取最新的代码，拉取方法如下。
   
   ```

5. 在你准备提交代码（push）之前，**一定要先从组长那里拉取最新的代码**！！！！！！

   ```shell
   # 以下代码直接复制即可
   # 获取上游代码
   git fetch upstream
   
   # 检查你的 fork’s 本地 master 分支，如果不在master 分支就切换到该分支
   git checkout master
   
   # 合并来自 upstream/master 的更改到本地 master 分支上。
   git merge upstream/master
   ```

6. 确认自己的代码是最新的之后，push代码到自己的远程仓库中

   ```shell
   # 第一次提交代码的时候需要使用该命令，之后就不用了
   git push -u origin master
   
   # 以后提交代码的时候使用以下名命令就行
   git push
   ```

7. 确保自己的代码没有bug之后，对组长发起 pull requests，保证其他组员也能看到你最新提交的代码 。

8. 以上步骤一定要按步骤来，否则其他组员无法及时看到你最新的代码，也会影响集体的进度。有不懂的地方及时与组长沟通，不会的地方一定要先问。

9. 如果发现其他组员的代码存在bug，要及时在组长的仓库里提交issue，以便于组员能真对该bug进行维护。
