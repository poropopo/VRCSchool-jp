---
title: Avatar Descriptor
sidebar_position: 4
slug: Avatar-Descriptor
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# VRC Avatar Descriptor {#ae47ea5d972d44b7a5b54d4a44f4ac5a}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


VRC Avatar Descriptorは、UnityのGameObjectをアバターにするコンポーネントです。



アバターに追加するには、`Add Component`ボタンをクリックし、上部の検索ボックスに`VRC Avatar Descriptor`と入力して、`VRC Avatar Descriptor`スクリプトを選択します。



これを行うと、まだ存在しない場合は`Pipeline Manager`スクリプトも自動的に追加されます。



アバターをアップロードするには、GameObjectにAnimatorが存在する必要があり、モデルがデフォルト（humanoid）アニメーションを使用できるようにするには、Humanoid Rigを持つ必要があることに注意してください。



Avatar Descriptorは、ゲーム内でアバターがどのように動作するかをVRChatに伝える場所です。以下が含まれます：


- 視点の位置
- 口の動き方
- 目の動き方
- アバターのアニメーション方法（動きやトグルなど）
- VRC Expression Menus（円形メニュー）の動作方法
- アバター上のVRC Physbone Collidersの設定方法


この記事では、これらすべてを詳細にカスタマイズする方法について説明します。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![VRC Avatar Descriptorをアバターに追加する方法](./Avatar-Descriptor.e3699c4a-cf7e-4813-ac2e-5a594fe61924.png)<br/><GreyItalicText>VRC Avatar Descriptorをアバターに追加する方法</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


---


## View Position {#0b37ff9175da463590f5065a3f928123}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


View Positionは、目の位置を決定するグローバル空間内の位置です。この位置は、灰色のボールの形でGizmoとして表示されます。この灰色のボールが見えない場合は、シーンビューでGizmosが無効になっていることを意味します。移動するには、`Edit`ボタンを押して表示されるハンドルを動かします。完了したら、緑色の`Return`ボタンを押します。




VRChatでこのView Positionが使用される方法は、T-Pose Controllerを再生し、View Positionの位置とヘッドボーンを比較して、このオフセットを保存します。このオフセットが、移動時の視点の位置を決定します。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.b5c3ad37-bf7f-49ff-8ca6-8da03eb679ee.png)


</div><div className='notion-spacer'></div>
</div>


:::tip

View Positionが間違った場所にある場合は、VRChatサンプルのT-Pose ControllerをAnimatorのController Slotに配置し、プレイモードに入って、View Positionを正しい場所に配置できます。

:::




---


## Lip Sync {#fae460a7a92143f4abd8a85832548cd5}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Lip Syncは、話すときのアバターの口の動きを制御します。これを制御するために選択できる複数のシステムがあります。Lip Syncヘッダーには、使用したいシステムを選択できるドロップダウンが表示されます。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.cb1efb1d-6026-4172-8057-541573226491.png)


</div><div className='notion-spacer'></div>
</div>


### Default {#16769332ab2348a4a1c2a9fae22ecc83}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


これはデフォルト値で、リップシンクは付いていません。押すと使用したいLip Syncのタイプを自動検出する`Auto Detect`ボタンのみが表示されます。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.f892715e-f46b-4086-8c0a-b740147cc010.png)


</div><div className='notion-spacer'></div>
</div>


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


### Viseme Blend Shape



これは最もよく使用されるシステムです。オーディオに基づいてVRChatが推定する顔の見た目に合わせて、Blend Shapesを変更するメッシュを指定できます。



Blend Shapeを変更するSkinned Mesh Rendererを指定するSkinned Mesh Rendererフィールドがあり、Skinned Mesh Rendererコンポーネントが存在する場合、多くのBlend Shapeドロップダウンが表示され、各visemeに使用するBlend Shapeを選択できます。



VRChatは、右側に示すように、名前に`v_[viseme]`または`vrc.v_[viseme]`が存在することに基づいて自動検出を試みます。



VRChatは、見つかった値に基づいて組み込みパラメータ`Viseme`を0から14までアニメーションします。



他のLip Syncモードについては、以下の**詳細設定**を参照してください。



</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.58bdee10-82e8-4c9e-86d8-8bffbd422d37.png)


</div><div className='notion-spacer'></div>
</div>


---


## Eye Look {#44905799a7594db393fa5e41e6b8ef53}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


これは、プレイ中にアバターの目がどのように見回すかを選択するセクションです。デフォルトでは無効になっており、大きな`Enable`ボタンのみが表示されます。このボタンを押すと、アバターのEye Lookが有効になり、EnableボタンがDisableボタンに置き換わり、Eye Lookを無効にします。



有効にすると、General、Eyes、Eyelidsの3つのカテゴリが表示され、それぞれにドロップダウンとして機能する小さな矢印があります。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.cd42741a-be13-4106-98f1-feeff138bade.png)


</div><div className='notion-spacer'></div>
</div>


### General {#7f6f077411c64fa0abe0cd2bd014d004}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Generalタブでは、アバターの目の動き方を設定できます。Calm-ExcitedとShy-Confidentの2つのスライダーがあります。Calm-Excitedはアバターの目がどれだけ動き回るかを決定し、Shy-Confidentは話しているときにアバターの目がどれだけ人を見るかを決定します。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.f366f479-1ec0-43cd-b0e1-c7815fa0a3d3.png)


</div><div className='notion-spacer'></div>
</div>


### Eyes {#36c13a6b40b146ec8d84ed82b23a297e}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Eyesタブには、TransformsとRotation Statesの2つのサブタブがあります。Transformsタブでは、目の動きを実行するために回転される各目のボーンを選択できます。これは、Humanoid RigのEye bonesに設定されているボーンと同じであってはならないことに注意してください。そうでなければ、Humanoid Rigによって動かすことができません。



一般的に、VRChatアバターには2セットのボーンが付属しています。1つはHumanoid Rig用（前方を向いている）、もう1つはAvatar Descriptor用（上を向いている）です。Avatar Descriptor用のボーンが上を向いている理由は、これによりデフォルトの回転が(0,0,0)になるためです。



Rotation Statesタブでは、異なる目の動き（Straight、Up、Down、Right、Left）の回転をx,y,z オイラー角として設定できます。`Preview`を押して回転をプレビューし、`Return`を押してプレビューを停止できます。



ボーンがデフォルトで上を向いている場合（デフォルト回転0,0,0）、正面を向いた状態の回転として0,0,0を使用し、正しい回転に対応する他のフィールドでそれからのオフセットを使用できます。



ボーンがデフォルトで上を向いていない場合（デフォルト回転0,0,0）、目のボーンのデフォルト回転を正面を向いた状態の回転として使用し、正しい回転に対応する他のフィールドでその回転からのオフセットを使用する必要があります。



Rotation Statesの左側にあるチェーンシンボルを押すと、L(eft)とR(ight)に分割され、目ごとに位置を設定できます。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.b06cea3b-6c9a-41a8-b1f3-06bef1c3702c.png)


</div><div className='notion-spacer'></div>
</div>


### Eyelids {#dfacf170d2df43c7a47cb5344fa4eb25}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Eyelidsタブは、ボーンまたはBlend Shapesを通じてアバターのまぶたの動きを制御します。



Eyelid Typeドロップダウンでは、使用したいまぶたのタイプを選択できます。これは`Bones`または`Blendshapes`のいずれかです。



#### Blendshapes



Blendshapesオプションでは、メッシュを選択し、その後Blink、Looking Up、Looking DownのBlend Shapesを選択できます。これらは他のものと同様にプレビューして戻すことができます。



他のEyelid Typesについては、以下の**詳細設定**を参照してください。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.9557939c-56a3-4eea-bcbe-ee849ae07986.png)


</div><div className='notion-spacer'></div>
</div>


---


## Playable Layers {#e5d0eff3f64e4392b5834cab71a184b1}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


これは、アバターのすべてのロジックを処理するAnimator Controllersが配置されるセクションです。これらが何をするか、何をすべきかについての詳細情報は、[Playable Layers](/docs/Avatars/Playable-Layers)ページで確認できます。



デフォルトでは、このセクションはVRChatによって設定されていますが、`Customize`ボタンを押すことでカスタマイズできます。Playable Layersは`Reset To Default`ボタンを押すことでデフォルトにリセットできます。`Base`と`Special`の2つのセクションがあります。



デフォルトでは、すべてデフォルトのコントローラーに設定されていますが、`Default [layer name]`テキストをクリックして、独自のAnimator Controllerを入力してカスタマイズできます。デフォルトのAnimator Controllerに戻したい場合は、Animator Controllerの右側にある`x`を押すことができます。



デフォルトのAnimator ControllersはAvatar SDKのSamplesの下にあります。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.eedef2db-a401-4cf6-ae7c-29b820ca03bb.png)


</div><div className='notion-spacer'></div>
</div>


---


## Expressions {#69eb6e440c2b4317935f05872288aebc}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Expressionsセクションでは、右手の円形メニューと、ネットワーク上で同期されるVRC Expression Parametersを設定できます。



デフォルトでは、アバターには8つの基本的なVRChatエモートがあります。`Customize`を押すと、独自のVRCExpressionMenusとVRCExpressionParametersを設定できます。



詳細については、[Expressions Menu and Parameters](/docs/Avatars/Expressions-Menu-Params)ページを参照してください。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.90d457d4-149d-40b5-aeb2-a96eb53325a2.png)


</div><div className='notion-spacer'></div>
</div>


---


## 詳細設定 {#27e7315bfacb4e4781662004f2e4dae9}


### Lip Sync {#bc2d3447324d412a9195091a19700e83}


#### Jaw Flap Bone


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


このシステムでは、VRChatが推定するあごの位置に合わせて回転されるGameObjectを指定できます。



回転されるGameObjectを供給するGameObjectフィールドと、開いた位置と閉じた位置でボーンが持つべき回転を指定する2組のオイラー角（x、y、z）があります。



`Preview`を押して状態をプレビューし、`Return`を押してプレビューを終了できます。



VRChatは音量に基づいて組み込みパラメータ`Viseme`を0から100までアニメーションします。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.61534e84-99d4-47ba-a38b-7d5c42c03c1a.png)


</div><div className='notion-spacer'></div>
</div>


#### Jaw Flap Blend Shape


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


このシステムでは、VRChatが推定するあごの位置に合わせてBlend Shapeが変更されるメッシュを指定できます。



Blend Shapeを変更するSkinned Mesh Rendererを指定するSkinned Mesh Rendererフィールドがあり、Skinned Mesh Rendererコンポーネントが存在する場合、使用するBlend Shapeを選択できるBlend Shapeドロップダウンが表示されます。



VRChatは音量に基づいて組み込みパラメータ`Viseme`を0から100までアニメーションします。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.c28604f0-a861-40ea-895c-270a39381483.png)


</div><div className='notion-spacer'></div>
</div>


#### Viseme Parameter Only


VRChatは見つかった値に基づいて組み込みパラメータ`Viseme`を0から14までアニメーションし、それ以外は何もしません。


---


### Eye Look {#c495657b81a1464ab7ce7bef177459b5}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


#### Eyelids



#### Bones



Bonesでは、ボーンとその回転方法を選択できます。これらの設定は`Transforms`と`Rotation States`セクションで設定できます。



`Transform`セクションでは、4つのボーン（目ごとに2つ、まぶたごとに1つ）を設定できます。



`Rotation States`セクションでは、各表情（`Default`、`Closed`、`Looking Up`、`Looking Down`）のすべてのまぶたの回転を設定できます。これらの回転は、SDKの他の部分のようなオイラー角ではなく、クォータニオンであることに注意してください。目と同様に、`Preview`ボタンでプレビューし、`Return`ボタンで戻すことができます。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.92f7798a-e0d8-4850-85ef-d1fee5dd3858.png)


</div><div className='notion-spacer'></div>
</div>


---


### Lower Body {#fbd87eb4146844dd8dd7d0f2d96b15c3}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Lower Bodyセクションには、フルボディトラッキング以外での下半身に関するいくつかの設定があります。



`Use Auto-Footsteps for 3 and 4 point tracking`トグルは、歩かずに上半身が動いたときに、上半身に合わせてHumanoid Rigが自動的に足音を立てるかどうかを決定します。



`Force Locomotion animations for 6 point tracking`トグルは、歩行時にアバターが脚にlocomotionアニメーションを使用するかどうかを決定します。つまり、有効にすると、腰と下半身がBase animator controllerに設定されたlocomotionアニメーションによってオーバーライドされます。



この動作は`VRC Animator Tracking Control`コンポーネントを使用して上書きできることに注意してください。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.0c0511df-0487-4c01-bff9-09ca8f988cf5.png)


</div><div className='notion-spacer'></div>
</div>


---


### Colliders {#f09699effb62486ab746c7b2825c7cae}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Collidersセクションでは、アバターに設定されたデフォルトのVRC Contact SendersとVRC Phys Bone Collidersを変更できます。



このリストのHandとFinger collidersは、ゲーム内のすべてのVRC PhysBonesに自動的に追加されるVRC PhysBone Collidersに変換されます。



このリストのすべてのcollidersは、対応するタグが設定されたVRC Contact Sendersに変換されます。



これらは、Humanoid RigのHumanoidボーンへのマッピングに基づいて設定されます。これは、非Humanoidアバターにはcollidersがないことを意味します。



各collidersについて、デフォルト、カスタム値、または完全に無効にするかを選択できます。`Custom`を使用する場合、常にCapsuleに設定される形状を除いて、VRC Physbone Collider/VRC Contact Senderのすべてのフィールドを制御できます。



Colliderの左側にあるチェーンシンボルを押すと、L(eft)とR(ight)に分割され、サイドごとに位置を設定できます。



`Colliders`ドロップダウンが有効になっている場合、シーンビューでGizmosが有効になっているときに、アバター上のcolliderの位置が表示されます。


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./Avatar-Descriptor.9e7b394e-3d17-4428-8d8c-8d67763010e6.png)


</div><div className='notion-spacer'></div>
</div>



---
<RightAlignedText>最終更新: 2024年3月31日 08:54:00</RightAlignedText>