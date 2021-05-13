const $viewportBackground = document.body;

var blueWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "blueWizBackgroundColor")    
}

var greyWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "greyWizBackgroundColor")    
}

var redWizPcBackground = () => {
    $viewportBackground.setAttribute("class", "redWizBackgroundColor")    
}

const $whiteBackground = document.getElementById("whiteBackground");

//pc blueWiz

//archie placeholder
const $blueWizArmPcAttackLeft = document.getElementById("blueWizArmPcAttackLeft");
const $blueWizArmPcAttackRight = document.getElementById("blueWizArmPcAttackRight");
const $blueWizArmPcDefaultLeft = document.getElementById("blueWizArmPcDefaultLeft");
const $blueWizArmPcDefaultRight = document.getElementById("blueWizArmPcDefaultRight");
const $blueWizArmPcDefendLeft = document.getElementById("blueWizArmPcDefendLeft");
const $blueWizArmPcDefendRight = document.getElementById("blueWizArmPcDefendRight");
const $blueWizArmPcClenchLeft = document.getElementById("blueWizArmPcClenchLeft");
const $blueWizArmPcClenchRight = document.getElementById("blueWizArmPcClenchRight");
const $blueWizPcWithoutArmsOrArchimedes = document.getElementById("blueWizPcWithoutArmsOrArchimedes");
const $magicMissile_0PcLeft = document.getElementById("magicMissile_0PcLeft");
const $magicMissile_0PcRight = document.getElementById("magicMissile_0PcRight");
const $magicMissile_1PcLeft = document.getElementById("magicMissile_1PcLeft");
const $magicMissile_1PcRight = document.getElementById("magicMissile_1PcRight");
const $magicMissile_2PcLeft = document.getElementById("magicMissile_2PcLeft");
const $magicMissile_2PcRight = document.getElementById("magicMissile_2PcRight");
const $magicMissile_3PcLeft = document.getElementById("magicMissile_3PcLeft");
const $magicMissile_3PcRight = document.getElementById("magicMissile_3PcRight");
const $magicMissileCondensation_0PcLeft = document.getElementById("magicMissileCondensation_0PcLeft");
const $magicMissileCondensation_0PcRight = document.getElementById("magicMissileCondensation_0PcRight");
const $magicMissileCondensation_1PcLeft = document.getElementById("magicMissileCondensation_1PcLeft");
const $magicMissileCondensation_1PcRight = document.getElementById("magicMissileCondensation_1PcRight");
const $magicMissileCondensation_2PcLeft = document.getElementById("magicMissileCondensation_2PcLeft");
const $magicMissileCondensation_2PcRight = document.getElementById("magicMissileCondensation_2PcRight");
const $magicMissileCondensation_3PcLeft = document.getElementById("magicMissileCondensation_3PcLeft");
const $magicMissileCondensation_3PcRight = document.getElementById("magicMissileCondensation_3PcRight");
const $magicMissileCondensation_4PcLeft = document.getElementById("magicMissileCondensation_4PcLeft");
const $magicMissileCondensation_4PcRight = document.getElementById("magicMissileCondensation_4PcRight");
const $magicMissileCondensation_5PcLeft = document.getElementById("magicMissileCondensation_5PcLeft");
const $magicMissileCondensation_5PcRight = document.getElementById("magicMissileCondensation_5PcRight");
const $magicMissilePcDefendedLeft = document.getElementById("magicMissilePcDefendedLeft");
const $magicMissilePcDefendedRight = document.getElementById("magicMissilePcDefendedRight");
const $magicMissileSplosionPcDefendedLeft = document.getElementById("magicMissileSplosionPcDefendedLeft");
const $magicMissileSplosionPcDefendedRight = document.getElementById("magicMissileSplosionPcDefendedRight");
const $magicMissileSplosionPcLeft = document.getElementById("magicMissileSplosionPcLeft");
const $magicMissileSplosionPcRight = document.getElementById("magicMissileSplosionPcRight");
const $star_0PcLeft = document.getElementById("star_0PcLeft");
const $star_0PcRight = document.getElementById("star_0PcRight");
const $star_1PcLeft = document.getElementById("star_1PcLeft");
const $star_1PcRight = document.getElementById("star_1PcRight");
const $star_2PcLeft = document.getElementById("star_2PcLeft");
const $star_2PcRight = document.getElementById("star_2PcRight");
const $star_3PcLeft = document.getElementById("star_3PcLeft");
const $star_3PcRight = document.getElementById("star_3PcRight");
const $star_4PcLeft= document.getElementById("star_4PcLeft");
const $star_4PcRight= document.getElementById("star_4PcRight");

//npc blueWiz

//archie placeholder
const $blueWizArmNpcAttackLeft = document.getElementById("blueWizArmNpcAttackLeft");
const $blueWizArmNpcAttackRight = document.getElementById("blueWizArmNpcAttackRight");
const $blueWizArmNpcDefaultLeft = document.getElementById("blueWizArmNpcDefaultLeft");
const $blueWizArmNpcDefaultRight = document.getElementById("blueWizArmNpcDefaultRight");
const $blueWizArmNpcDefendLeft = document.getElementById("blueWizArmNpcDefendLeft");
const $blueWizArmNpcDefendRight = document.getElementById("blueWizArmNpcDefendRight");
const $blueWizArmNpcClenchLeft = document.getElementById("blueWizArmNpcClenchLeft");
const $blueWizArmNpcClenchRight = document.getElementById("blueWizArmNpcClenchRight");
const $blueWizNpcWithoutArmsOrArchimedes = document.getElementById("blueWizNpcWithoutArmsOrArchimedes");
const $magicMissile_0NpcLeft = document.getElementById("magicMissile_0NpcLeft");
const $magicMissile_0NpcRight = document.getElementById("magicMissile_0NpcRight");
const $magicMissile_1NpcLeft = document.getElementById("magicMissile_1NpcLeft");
const $magicMissile_1NpcRight = document.getElementById("magicMissile_1NpcRight");
const $magicMissile_2NpcLeft = document.getElementById("magicMissile_2NpcLeft");
const $magicMissile_2NpcRight = document.getElementById("magicMissile_2NpcRight");
const $magicMissile_3NpcLeft = document.getElementById("magicMissile_3NpcLeft");
const $magicMissile_3NpcRight = document.getElementById("magicMissile_3NpcRight");
const $magicMissileCondensation_0NpcLeft = document.getElementById("magicMissileCondensation_0NpcLeft");
const $magicMissileCondensation_0NpcRight = document.getElementById("magicMissileCondensation_0NpcRight");
const $magicMissileCondensation_1NpcLeft = document.getElementById("magicMissileCondensation_1NpcLeft");
const $magicMissileCondensation_1NpcRight = document.getElementById("magicMissileCondensation_1NpcRight");
const $magicMissileCondensation_2NpcLeft = document.getElementById("magicMissileCondensation_2NpcLeft");
const $magicMissileCondensation_2NpcRight = document.getElementById("magicMissileCondensation_2NpcRight");
const $magicMissileCondensation_3NpcLeft = document.getElementById("magicMissileCondensation_3NpcLeft");
const $magicMissileCondensation_3NpcRight = document.getElementById("magicMissileCondensation_3NpcRight");
const $magicMissileCondensation_4NpcLeft = document.getElementById("magicMissileCondensation_4NpcLeft");
const $magicMissileCondensation_4NpcRight = document.getElementById("magicMissileCondensation_4NpcRight");
const $magicMissileCondensation_5NpcLeft = document.getElementById("magicMissileCondensation_5NpcLeft");
const $magicMissileCondensation_5NpcRight = document.getElementById("magicMissileCondensation_5NpcRight");
const $magicMissileNpcDefendedLeft = document.getElementById("magicMissileNpcDefendedLeft");
const $magicMissileNpcDefendedRight = document.getElementById("magicMissileNpcDefendedRight");
const $magicMissileSplosionNpcDefendedLeft = document.getElementById("magicMissileSplosionNpcDefendedLeft");
const $magicMissileSplosionNpcDefendedRight = document.getElementById("magicMissileSplosionNpcDefendedRight");
const $magicMissileSplosionNpcLeft = document.getElementById("magicMissileSplosionNpcLeft");
const $magicMissileSplosionNpcRight = document.getElementById("magicMissileSplosionNpcRight");
const $star_0NpcLeft = document.getElementById("star_0NpcLeft");
const $star_0NpcRight = document.getElementById("star_0NpcRight");
const $star_1NpcLeft = document.getElementById("star_1NpcLeft");
const $star_1NpcRight = document.getElementById("star_1NpcRight");
const $star_2NpcLeft = document.getElementById("star_2NpcLeft");
const $star_2NpcRight = document.getElementById("star_2NpcRight");
const $star_3NpcLeft = document.getElementById("star_3NpcLeft");
const $star_3NpcRight = document.getElementById("star_3NpcRight");
const $star_4NpcLeft= document.getElementById("star_4NpcLeft");
const $star_4NpcRight= document.getElementById("star_4NpcRight");

//pc greyWiz

const $greyWizArmPcDefaultLeft = document.getElementById("greyWizArmPcDefaultLeft");
const $greyWizArmPcDefaultRight = document.getElementById("greyWizArmPcDefaultRight");
const $greyWizArmPcDefendLeft = document.getElementById("greyWizArmPcDefendLeft");
const $greyWizArmPcDefendRight = document.getElementById("greyWizArmPcDefendRight");
const $greyWizPcWithoutArms = document.getElementById("greyWizPcWithoutArms");
const $greyWizPcStruckLeft = document.getElementById("greyWizPcStruckLeft");
const $greyWizPcStruckRight = document.getElementById("greyWizPcStruckRight");
const $greyWizPcWithoutHands = document.getElementById("greyWizPcWithoutHands");
const $greyWizHandPcDefaultLeft = document.getElementById("greyWizHandPcDefaultLeft");
const $greyWizHandPc15DegreesLeft = document.getElementById("greyWizHandPc15DegreesLeft");
const $greyWizHandPc30DegreesLeft = document.getElementById("greyWizHandPc30DegreesLeft");
const $greyWizHandPc45DegreesLeft = document.getElementById("greyWizHandPc45DegreesLeft");
const $greyWizHandPcDefaultRight = document.getElementById("greyWizHandPcDefaultRight");
const $greyWizHandPc345DegreesRight = document.getElementById("greyWizHandPc345DegreesRight");
const $greyWizHandPc330DegreesRight = document.getElementById("greyWizHandPc330DegreesRight");
const $greyWizHandPc315DegreesRight = document.getElementById("greyWizHandPc315DegreesRight");
const $protrudingFireworkTop_0PcLeft = document.getElementById("protrudingFireworkTop_0PcLeft");
const $protrudingFireworkTop_1PcLeft = document.getElementById("protrudingFireworkTop_1PcLeft");
const $protrudingFireworkTop_2PcLeft = document.getElementById("protrudingFireworkTop_2PcLeft");
const $protrudingFireworkTop_3PcLeft = document.getElementById("protrudingFireworkTop_3PcLeft");
const $protrudingFireworkTop_4PcLeft = document.getElementById("protrudingFireworkTop_4PcLeft");
const $protrudingFireworkTop_5PcLeft = document.getElementById("protrudingFireworkTop_5PcLeft");
const $protrudingFireworkTop_6PcLeft = document.getElementById("protrudingFireworkTop_6PcLeft");
const $protrudingFireworkTop_0PcRight = document.getElementById("protrudingFireworkTop_0PcRight");
const $protrudingFireworkTop_1PcRight = document.getElementById("protrudingFireworkTop_1PcRight");
const $protrudingFireworkTop_2PcRight = document.getElementById("protrudingFireworkTop_2PcRight");
const $protrudingFireworkTop_3PcRight = document.getElementById("protrudingFireworkTop_3PcRight");
const $protrudingFireworkTop_4PcRight = document.getElementById("protrudingFireworkTop_4PcRight");
const $protrudingFireworkTop_5PcRight = document.getElementById("protrudingFireworkTop_5PcRight");
const $protrudingFireworkTop_6PcRight = document.getElementById("protrudingFireworkTop_6PcRight");
const $protrudingFireworkMiddle_0PcLeft = document.getElementById("protrudingFireworkMiddle_0PcLeft");
const $protrudingFireworkMiddle_1PcLeft = document.getElementById("protrudingFireworkMiddle_1PcLeft");
const $protrudingFireworkMiddle_2PcLeft = document.getElementById("protrudingFireworkMiddle_2PcLeft");
const $protrudingFireworkMiddle_3PcLeft = document.getElementById("protrudingFireworkMiddle_3PcLeft");
const $protrudingFireworkMiddle_4PcLeft = document.getElementById("protrudingFireworkMiddle_4PcLeft");
const $protrudingFireworkMiddle_5PcLeft = document.getElementById("protrudingFireworkMiddle_5PcLeft");
const $protrudingFireworkMiddle_6PcLeft = document.getElementById("protrudingFireworkMiddle_6PcLeft");
const $protrudingFireworkMiddle_0PcRight = document.getElementById("protrudingFireworkMiddle_0PcRight");
const $protrudingFireworkMiddle_1PcRight = document.getElementById("protrudingFireworkMiddle_1PcRight");
const $protrudingFireworkMiddle_2PcRight = document.getElementById("protrudingFireworkMiddle_2PcRight");
const $protrudingFireworkMiddle_3PcRight = document.getElementById("protrudingFireworkMiddle_3PcRight");
const $protrudingFireworkMiddle_4PcRight = document.getElementById("protrudingFireworkMiddle_4PcRight");
const $protrudingFireworkMiddle_5PcRight = document.getElementById("protrudingFireworkMiddle_5PcRight");
const $protrudingFireworkMiddle_6PcRight = document.getElementById("protrudingFireworkMiddle_6PcRight");
const $protrudingFireworkBottom_0PcLeft = document.getElementById("protrudingFireworkBottom_0PcLeft");
const $protrudingFireworkBottom_1PcLeft = document.getElementById("protrudingFireworkBottom_1PcLeft");
const $protrudingFireworkBottom_2PcLeft = document.getElementById("protrudingFireworkBottom_2PcLeft");
const $protrudingFireworkBottom_3PcLeft = document.getElementById("protrudingFireworkBottom_3PcLeft");
const $protrudingFireworkBottom_4PcLeft = document.getElementById("protrudingFireworkBottom_4PcLeft");
const $protrudingFireworkBottom_5PcLeft = document.getElementById("protrudingFireworkBottom_5PcLeft");
const $protrudingFireworkBottom_6PcLeft = document.getElementById("protrudingFireworkBottom_6PcLeft");
const $protrudingFireworkBottom_0PcRight = document.getElementById("protrudingFireworkBottom_0PcRight");
const $protrudingFireworkBottom_1PcRight = document.getElementById("protrudingFireworkBottom_1PcRight");
const $protrudingFireworkBottom_2PcRight = document.getElementById("protrudingFireworkBottom_2PcRight");
const $protrudingFireworkBottom_3PcRight = document.getElementById("protrudingFireworkBottom_3PcRight");
const $protrudingFireworkBottom_4PcRight = document.getElementById("protrudingFireworkBottom_4PcRight");
const $protrudingFireworkBottom_5PcRight = document.getElementById("protrudingFireworkBottom_5PcRight");
const $protrudingFireworkBottom_6PcRight = document.getElementById("protrudingFireworkBottom_6PcRight");
const $topFirework_0PcLeft = document.getElementById("topFirework_0PcLeft");
const $topFirework_1PcLeft = document.getElementById("topFirework_1PcLeft");
const $topFirework_2PcLeft = document.getElementById("topFirework_2PcLeft");
const $topFirework_3PcLeft = document.getElementById("topFirework_3PcLeft");
const $topFirework_4PcLeft = document.getElementById("topFirework_4PcLeft");
const $topFirework_5PcLeft = document.getElementById("topFirework_5PcLeft");
const $topFirework_6PcLeft = document.getElementById("topFirework_6PcLeft");
const $topFirework_0PcRight = document.getElementById("topFirework_0PcRight");
const $topFirework_1PcRight = document.getElementById("topFirework_1PcRight");
const $topFirework_2PcRight = document.getElementById("topFirework_2PcRight");
const $topFirework_3PcRight = document.getElementById("topFirework_3PcRight");
const $topFirework_4PcRight = document.getElementById("topFirework_4PcRight");
const $topFirework_5PcRight = document.getElementById("topFirework_5PcRight");
const $topFirework_6PcRight = document.getElementById("topFirework_6PcRight");
const $middleFirework_0PcLeft = document.getElementById("middleFirework_0PcLeft");
const $middleFirework_1PcLeft = document.getElementById("middleFirework_1PcLeft");
const $middleFirework_2PcLeft = document.getElementById("middleFirework_2PcLeft");
const $middleFirework_3PcLeft = document.getElementById("middleFirework_3PcLeft");
const $middleFirework_4PcLeft = document.getElementById("middleFirework_4PcLeft");
const $middleFirework_5PcLeft = document.getElementById("middleFirework_5PcLeft");
const $middleFirework_0PcRight = document.getElementById("middleFirework_0PcRight");
const $middleFirework_1PcRight = document.getElementById("middleFirework_1PcRight");
const $middleFirework_2PcRight = document.getElementById("middleFirework_2PcRight");
const $middleFirework_3PcRight = document.getElementById("middleFirework_3PcRight");
const $middleFirework_4PcRight = document.getElementById("middleFirework_4PcRight");
const $middleFirework_5PcRight = document.getElementById("middleFirework_5PcRight");
const $bottomFirework_0PcLeft = document.getElementById("bottomFirework_0PcLeft");
const $bottomFirework_1PcLeft = document.getElementById("bottomFirework_1PcLeft");
const $bottomFirework_2PcLeft = document.getElementById("bottomFirework_2PcLeft");
const $bottomFirework_3PcLeft = document.getElementById("bottomFirework_3PcLeft");
const $bottomFirework_4PcLeft = document.getElementById("bottomFirework_4PcLeft");
const $bottomFirework_0PcRight = document.getElementById("bottomFirework_0PcRight");
const $bottomFirework_1PcRight = document.getElementById("bottomFirework_1PcRight");
const $bottomFirework_2PcRight = document.getElementById("bottomFirework_2PcRight");
const $bottomFirework_3PcRight = document.getElementById("bottomFirework_3PcRight");
const $bottomFirework_4PcRight = document.getElementById("bottomFirework_4PcRight");
const $middleFirework_3Z_1PcLeft = document.getElementById("middleFirework_3Z_1PcLeft");
const $middleFirework_3Z_1PcRight = document.getElementById("middleFirework_3Z_1PcRight");
const $middleFirework_4Z_2PcLeft = document.getElementById("middleFirework_4Z_2PcLeft");
const $middleFirework_4Z_2PcRight = document.getElementById("middleFirework_4Z_2PcRight");
const $bottomFirework_3Z_1PcLeft = document.getElementById("bottomFirework_3Z_1PcLeft");
const $bottomFirework_3Z_1PcRight = document.getElementById("bottomFirework_3Z_1PcRight");
const $middleFirework_5Z_1PcLeft = document.getElementById("middleFirework_5Z_1PcLeft");
const $middleFirework_5Z_1PcRight = document.getElementById("middleFirework_5Z_1PcRight");
const $bottomFirework_4Z_2PcLeft = document.getElementById("bottomFirework_4Z_2PcLeft");
const $bottomFirework_4Z_2PcRight = document.getElementById("bottomFirework_4Z_2PcRight");
const $axeFireworkExplosionPcLeft = document.getElementById("axeFireworkExplosionPcLeft");
const $axeFireworkExplosionPcRight = document.getElementById("axeFireworkExplosionPcRight");
const $axeSmokePcFullMinus10Left = document.getElementById("axeSmokePcFullMinus10Left");
const $axeSmokePcFullMinus9Left = document.getElementById("axeSmokePcFullMinus9Left");
const $axeSmokePcFullMinus8Left = document.getElementById("axeSmokePcFullMinus8Left");
const $axeSmokePcFullMinus7Left = document.getElementById("axeSmokePcFullMinus7Left");
const $axeSmokePcFullMinus6Left = document.getElementById("axeSmokePcFullMinus6Left");
const $axeSmokePcFullMinus5Left = document.getElementById("axeSmokePcFullMinus5Left");
const $axeSmokePcFullMinus4Left = document.getElementById("axeSmokePcFullMinus4Left");
const $axeSmokePcFullMinus3Left = document.getElementById("axeSmokePcFullMinus3Left");
const $axeSmokePcFullMinus2Left = document.getElementById("axeSmokePcFullMinus2Left");
const $axeSmokePcFullMinus1Left = document.getElementById("axeSmokePcFullMinus1Left");
const $axeSmokePcFullLeft = document.getElementById("axeSmokePcFullLeft");
const $axeSmokePcFullMinus10Right = document.getElementById("axeSmokePcFullMinus10Right");
const $axeSmokePcFullMinus9Right = document.getElementById("axeSmokePcFullMinus9Right");
const $axeSmokePcFullMinus8Right = document.getElementById("axeSmokePcFullMinus8Right");
const $axeSmokePcFullMinus7Right = document.getElementById("axeSmokePcFullMinus7Right");
const $axeSmokePcFullMinus6Right = document.getElementById("axeSmokePcFullMinus6Right");
const $axeSmokePcFullMinus5Right = document.getElementById("axeSmokePcFullMinus5Right");
const $axeSmokePcFullMinus4Right = document.getElementById("axeSmokePcFullMinus4Right");
const $axeSmokePcFullMinus3Right = document.getElementById("axeSmokePcFullMinus3Right");
const $axeSmokePcFullMinus2Right = document.getElementById("axeSmokePcFullMinus2Right");
const $axeSmokePcFullMinus1Right = document.getElementById("axeSmokePcFullMinus1Right");
const $axeSmokePcFullRight = document.getElementById("axeSmokePcFullRight");
const $bowFireworkExplosionPcLeft = document.getElementById("bowFireworkExplosionPcLeft");
const $bowFireworkExplosionPcRight = document.getElementById("bowFireworkExplosionPcRight");
const $bowSmokePcFullMinus10Left = document.getElementById("bowSmokePcFullMinus10Left");
const $bowSmokePcFullMinus9Left = document.getElementById("bowSmokePcFullMinus9Left");
const $bowSmokePcFullMinus8Left = document.getElementById("bowSmokePcFullMinus8Left");
const $bowSmokePcFullMinus7Left = document.getElementById("bowSmokePcFullMinus7Left");
const $bowSmokePcFullMinus6Left = document.getElementById("bowSmokePcFullMinus6Left");
const $bowSmokePcFullMinus5Left = document.getElementById("bowSmokePcFullMinus5Left");
const $bowSmokePcFullMinus4Left = document.getElementById("bowSmokePcFullMinus4Left");
const $bowSmokePcFullMinus3Left = document.getElementById("bowSmokePcFullMinus3Left");
const $bowSmokePcFullMinus2Left = document.getElementById("bowSmokePcFullMinus2Left");
const $bowSmokePcFullMinus1Left = document.getElementById("bowSmokePcFullMinus1Left");
const $bowSmokePcFullLeft = document.getElementById("bowSmokePcFullLeft");
const $bowSmokePcFullMinus10Right = document.getElementById("bowSmokePcFullMinus10Right");
const $bowSmokePcFullMinus9Right = document.getElementById("bowSmokePcFullMinus9Right");
const $bowSmokePcFullMinus8Right = document.getElementById("bowSmokePcFullMinus8Right");
const $bowSmokePcFullMinus7Right = document.getElementById("bowSmokePcFullMinus7Right");
const $bowSmokePcFullMinus6Right = document.getElementById("bowSmokePcFullMinus6Right");
const $bowSmokePcFullMinus5Right = document.getElementById("bowSmokePcFullMinus5Right");
const $bowSmokePcFullMinus4Right = document.getElementById("bowSmokePcFullMinus4Right");
const $bowSmokePcFullMinus3Right = document.getElementById("bowSmokePcFullMinus3Right");
const $bowSmokePcFullMinus2Right = document.getElementById("bowSmokePcFullMinus2Right");
const $bowSmokePcFullMinus1Right = document.getElementById("bowSmokePcFullMinus1Right");
const $bowSmokePcFullRight = document.getElementById("bowSmokePcFullRight");
const $swordFireworkExplosionPcLeft = document.getElementById("swordFireworkExplosionPcLeft");
const $swordFireworkExplosionPcRight = document.getElementById("swordFireworkExplosionPcRight");
const $swordSmokePcFullMinus10Left = document.getElementById("swordSmokePcFullMinus10Left");
const $swordSmokePcFullMinus9Left = document.getElementById("swordSmokePcFullMinus9Left");
const $swordSmokePcFullMinus8Left = document.getElementById("swordSmokePcFullMinus8Left");
const $swordSmokePcFullMinus7Left = document.getElementById("swordSmokePcFullMinus7Left");
const $swordSmokePcFullMinus6Left = document.getElementById("swordSmokePcFullMinus6Left");
const $swordSmokePcFullMinus5Left = document.getElementById("swordSmokePcFullMinus5Left");
const $swordSmokePcFullMinus4Left = document.getElementById("swordSmokePcFullMinus4Left");
const $swordSmokePcFullMinus3Left = document.getElementById("swordSmokePcFullMinus3Left");
const $swordSmokePcFullMinus2Left = document.getElementById("swordSmokePcFullMinus2Left");
const $swordSmokePcFullMinus1Left = document.getElementById("swordSmokePcFullMinus1Left");
const $swordSmokePcFullLeft = document.getElementById("swordSmokePcFullLeft");
const $swordSmokePcFullMinus10Right = document.getElementById("swordSmokePcFullMinus10Right");
const $swordSmokePcFullMinus9Right = document.getElementById("swordSmokePcFullMinus9Right");
const $swordSmokePcFullMinus8Right = document.getElementById("swordSmokePcFullMinus8Right");
const $swordSmokePcFullMinus7Right = document.getElementById("swordSmokePcFullMinus7Right");
const $swordSmokePcFullMinus6Right = document.getElementById("swordSmokePcFullMinus6Right");
const $swordSmokePcFullMinus5Right = document.getElementById("swordSmokePcFullMinus5Right");
const $swordSmokePcFullMinus4Right = document.getElementById("swordSmokePcFullMinus4Right");
const $swordSmokePcFullMinus3Right = document.getElementById("swordSmokePcFullMinus3Right");
const $swordSmokePcFullMinus2Right = document.getElementById("swordSmokePcFullMinus2Right");
const $swordSmokePcFullMinus1Right = document.getElementById("swordSmokePcFullMinus1Right");
const $swordSmokePcFullRight = document.getElementById("swordSmokePcFullRight");
const $axeBowFireworkExplosionPcLeft = document.getElementById("axeBowFireworkExplosionPcLeft");
const $axeBowFireworkExplosionPcRight = document.getElementById("axeBowFireworkExplosionPcRight");
const $axeBowSmokePcFullMinus10Left = document.getElementById("axeBowSmokePcFullMinus10Left");
const $axeBowSmokePcFullMinus9Left = document.getElementById("axeBowSmokePcFullMinus9Left");
const $axeBowSmokePcFullMinus8Left = document.getElementById("axeBowSmokePcFullMinus8Left");
const $axeBowSmokePcFullMinus7Left = document.getElementById("axeBowSmokePcFullMinus7Left");
const $axeBowSmokePcFullMinus6Left = document.getElementById("axeBowSmokePcFullMinus6Left");
const $axeBowSmokePcFullMinus5Left = document.getElementById("axeBowSmokePcFullMinus5Left");
const $axeBowSmokePcFullMinus4Left = document.getElementById("axeBowSmokePcFullMinus4Left");
const $axeBowSmokePcFullMinus3Left = document.getElementById("axeBowSmokePcFullMinus3Left");
const $axeBowSmokePcFullMinus2Left = document.getElementById("axeBowSmokePcFullMinus2Left");
const $axeBowSmokePcFullMinus1Left = document.getElementById("axeBowSmokePcFullMinus1Left");
const $axeBowSmokeFullPcLeft = document.getElementById("axeBowSmokePcFullLeft");
const $axeBowSmokePcFullMinus10Right = document.getElementById("axeBowSmokePcFullMinus10Right");
const $axeBowSmokePcFullMinus9Right = document.getElementById("axeBowSmokePcFullMinus9Right");
const $axeBowSmokePcFullMinus8Right = document.getElementById("axeBowSmokePcFullMinus8Right");
const $axeBowSmokePcFullMinus7Right = document.getElementById("axeBowSmokePcFullMinus7Right");
const $axeBowSmokePcFullMinus6Right = document.getElementById("axeBowSmokePcFullMinus6Right");
const $axeBowSmokePcFullMinus5Right = document.getElementById("axeBowSmokePcFullMinus5Right");
const $axeBowSmokePcFullMinus4Right = document.getElementById("axeBowSmokePcFullMinus4Right");
const $axeBowSmokePcFullMinus3Right = document.getElementById("axeBowSmokePcFullMinus3Right");
const $axeBowSmokePcFullMinus2Right = document.getElementById("axeBowSmokePcFullMinus2Right");
const $axeBowSmokePcFullMinus1Right = document.getElementById("axeBowSmokePcFullMinus1Right");
const $axeBowSmokeFullPcRight = document.getElementById("axeBowSmokePcFullRight");
const $axeSwordFireworkExplosionPcLeft = document.getElementById("axeSwordFireworkExplosionPcLeft");
const $axeSwordFireworkExplosionPcRight = document.getElementById("axeSwordFireworkExplosionPcRight");
const $axeSwordSmokePcFullMinus10Left = document.getElementById("axeSwordSmokePcFullMinus10Left");
const $axeSwordSmokePcFullMinus9Left = document.getElementById("axeSwordSmokePcFullMinus9Left");
const $axeSwordSmokePcFullMinus8Left = document.getElementById("axeSwordSmokePcFullMinus8Left");
const $axeSwordSmokePcFullMinus7Left = document.getElementById("axeSwordSmokePcFullMinus7Left");
const $axeSwordSmokePcFullMinus6Left = document.getElementById("axeSwordSmokePcFullMinus6Left");
const $axeSwordSmokePcFullMinus5Left = document.getElementById("axeSwordSmokePcFullMinus5Left");
const $axeSwordSmokePcFullMinus4Left = document.getElementById("axeSwordSmokePcFullMinus4Left");
const $axeSwordSmokePcFullMinus3Left = document.getElementById("axeSwordSmokePcFullMinus3Left");
const $axeSwordSmokePcFullMinus2Left = document.getElementById("axeSwordSmokePcFullMinus2Left");
const $axeSwordSmokePcFullMinus1Left = document.getElementById("axeSwordSmokePcFullMinus1Left");
const $axeSwordSmokePcFullLeft = document.getElementById("axeSwordSmokePcFullLeft");
const $axeSwordSmokePcFullMinus10Right = document.getElementById("axeSwordSmokePcFullMinus10Right");
const $axeSwordSmokePcFullMinus9Right = document.getElementById("axeSwordSmokePcFullMinus9Right");
const $axeSwordSmokePcFullMinus8Right = document.getElementById("axeSwordSmokePcFullMinus8Right");
const $axeSwordSmokePcFullMinus7Right = document.getElementById("axeSwordSmokePcFullMinus7Right");
const $axeSwordSmokePcFullMinus6Right = document.getElementById("axeSwordSmokePcFullMinus6Right");
const $axeSwordSmokePcFullMinus5Right = document.getElementById("axeSwordSmokePcFullMinus5Right");
const $axeSwordSmokePcFullMinus4Right = document.getElementById("axeSwordSmokePcFullMinus4Right");
const $axeSwordSmokePcFullMinus3Right = document.getElementById("axeSwordSmokePcFullMinus3Right");
const $axeSwordSmokePcFullMinus2Right = document.getElementById("axeSwordSmokePcFullMinus2Right");
const $axeSwordSmokePcFullMinus1Right = document.getElementById("axeSwordSmokePcFullMinus1Right");
const $axeSwordSmokePcFullRight = document.getElementById("axeSwordSmokePcFullRight");
const $bowSwordFireworkExplosionPcLeft = document.getElementById("bowSwordFireworkExplosionPcLeft");
const $bowSwordFireworkExplosionPcRight = document.getElementById("bowSwordFireworkExplosionPcRight");
const $bowSwordSmokePcFullMinus10Left = document.getElementById("bowSwordSmokePcFullMinus10Left");
const $bowSwordSmokePcFullMinus9Left = document.getElementById("bowSwordSmokePcFullMinus9Left");
const $bowSwordSmokePcFullMinus8Left = document.getElementById("bowSwordSmokePcFullMinus8Left");
const $bowSwordSmokePcFullMinus7Left = document.getElementById("bowSwordSmokePcFullMinus7Left");
const $bowSwordSmokePcFullMinus6Left = document.getElementById("bowSwordSmokePcFullMinus6Left");
const $bowSwordSmokePcFullMinus5Left = document.getElementById("bowSwordSmokePcFullMinus5Left");
const $bowSwordSmokePcFullMinus4Left = document.getElementById("bowSwordSmokePcFullMinus4Left");
const $bowSwordSmokePcFullMinus3Left = document.getElementById("bowSwordSmokePcFullMinus3Left");
const $bowSwordSmokePcFullMinus2Left = document.getElementById("bowSwordSmokePcFullMinus2Left");
const $bowSwordSmokePcFullMinus1Left = document.getElementById("bowSwordSmokePcFullMinus1Left");
const $bowSwordSmokePcFullLeft = document.getElementById("bowSwordSmokePcFullLeft");
const $bowSwordSmokePcFullMinus10Right = document.getElementById("bowSwordSmokePcFullMinus10Right");
const $bowSwordSmokePcFullMinus9Right = document.getElementById("bowSwordSmokePcFullMinus9Right");
const $bowSwordSmokePcFullMinus8Right = document.getElementById("bowSwordSmokePcFullMinus8Right");
const $bowSwordSmokePcFullMinus7Right = document.getElementById("bowSwordSmokePcFullMinus7Right");
const $bowSwordSmokePcFullMinus6Right = document.getElementById("bowSwordSmokePcFullMinus6Right");
const $bowSwordSmokePcFullMinus5Right = document.getElementById("bowSwordSmokePcFullMinus5Right");
const $bowSwordSmokePcFullMinus4Right = document.getElementById("bowSwordSmokePcFullMinus4Right");
const $bowSwordSmokePcFullMinus3Right = document.getElementById("bowSwordSmokePcFullMinus3Right");
const $bowSwordSmokePcFullMinus2Right = document.getElementById("bowSwordSmokePcFullMinus2Right");
const $bowSwordSmokePcFullMinus1Right = document.getElementById("bowSwordSmokePcFullMinus1Right");
const $bowSwordSmokePcFullRight = document.getElementById("bowSwordSmokePcFullRight");
const $axeBowSwordFireworkExplosionPcLeft = document.getElementById("axeBowSwordFireworkExplosionPcLeft");
const $axeBowSwordFireworkExplosionPcRight = document.getElementById("axeBowSwordFireworkExplosionPcRight");
const $axeBowSwordSmokePcFullMinus10Left = document.getElementById("axeBowSwordSmokePcFullMinus10Left");
const $axeBowSwordSmokePcFullMinus9Left = document.getElementById("axeBowSwordSmokePcFullMinus9Left");
const $axeBowSwordSmokePcFullMinus8Left = document.getElementById("axeBowSwordSmokePcFullMinus8Left");
const $axeBowSwordSmokePcFullMinus7Left = document.getElementById("axeBowSwordSmokePcFullMinus7Left");
const $axeBowSwordSmokePcFullMinus6Left = document.getElementById("axeBowSwordSmokePcFullMinus6Left");
const $axeBowSwordSmokePcFullMinus5Left = document.getElementById("axeBowSwordSmokePcFullMinus5Left");
const $axeBowSwordSmokePcFullMinus4Left = document.getElementById("axeBowSwordSmokePcFullMinus4Left");
const $axeBowSwordSmokePcFullMinus3Left = document.getElementById("axeBowSwordSmokePcFullMinus3Left");
const $axeBowSwordSmokePcFullMinus2Left = document.getElementById("axeBowSwordSmokePcFullMinus2Left");
const $axeBowSwordSmokePcFullMinus1Left = document.getElementById("axeBowSwordSmokePcFullMinus1Left");
const $axeBowSwordSmokePcFullLeft = document.getElementById("axeBowSwordSmokePcFullLeft");
const $axeBowSwordSmokePcFullMinus10Right = document.getElementById("axeBowSwordSmokePcFullMinus10Right");
const $axeBowSwordSmokePcFullMinus9Right = document.getElementById("axeBowSwordSmokePcFullMinus9Right");
const $axeBowSwordSmokePcFullMinus8Right = document.getElementById("axeBowSwordSmokePcFullMinus8Right");
const $axeBowSwordSmokePcFullMinus7Right = document.getElementById("axeBowSwordSmokePcFullMinus7Right");
const $axeBowSwordSmokePcFullMinus6Right = document.getElementById("axeBowSwordSmokePcFullMinus6Right");
const $axeBowSwordSmokePcFullMinus5Right = document.getElementById("axeBowSwordSmokePcFullMinus5Right");
const $axeBowSwordSmokePcFullMinus4Right = document.getElementById("axeBowSwordSmokePcFullMinus4Right");
const $axeBowSwordSmokePcFullMinus3Right = document.getElementById("axeBowSwordSmokePcFullMinus3Right");
const $axeBowSwordSmokePcFullMinus2Right = document.getElementById("axeBowSwordSmokePcFullMinus2Right");
const $axeBowSwordSmokePcFullMinus1Right = document.getElementById("axeBowSwordSmokePcFullMinus1Right");
const $axeBowSwordSmokePcFullRight = document.getElementById("axeBowSwordSmokePcFullRight");
const $fireworkAxePcLeft = document.getElementById("fireworkAxePcLeft");
const $fireworkBowPcLeft = document.getElementById("fireworkBowPcLeft");
const $fireworkSwordPcLeft = document.getElementById("fireworkSwordPcLeft");
const $fireworkAxePcRight = document.getElementById("fireworkAxePcRight");
const $fireworkBowPcRight = document.getElementById("fireworkBowPcRight");
const $fireworkSwordPcRight = document.getElementById("fireworkSwordPcRight");
const $fireworkAxeShimmerPcFullLeft = document.getElementById("fireworkAxeShimmerPcFullLeft");
const $fireworkBowShimmerPcFullLeft = document.getElementById("fireworkBowShimmerPcFullLeft");
const $fireworkSwordShimmerPcFullLeft = document.getElementById("fireworkSwordShimmerPcFullLeft");
const $fireworkAxeShimmerPcFullRight = document.getElementById("fireworkAxeShimmerPcFullRight");
const $fireworkBowShimmerPcFullRight = document.getElementById("fireworkBowShimmerPcFullRight");
const $fireworkSwordShimmerPcFullRight = document.getElementById("fireworkSwordShimmerPcFullRight");
const $bottomFirework_5PcLeft = document.getElementById("bottomFirework_5PcLeft");
const $bottomFirework_5PcRight = document.getElementById("bottomFirework_5PcRight");
const $middleFirework_6PcLeft = document.getElementById("middleFirework_6PcLeft");
const $middleFirework_6PcRight = document.getElementById("middleFirework_6PcRight");
const $topFirework_7PcLeft = document.getElementById("topFirework_7PcLeft");
const $topFirework_7PcRight = document.getElementById("topFirework_7PcRight");
const $bottomFirework_5Z_6PcLeft = document.getElementById("bottomFirework_5Z_6PcLeft");
const $bottomFirework_5Z_6PcRight = document.getElementById("bottomFirework_5Z_6PcRight");
const $middleFirework_6Z_5PcLeft = document.getElementById("middleFirework_6Z_5PcLeft");
const $middleFirework_6Z_5PcRight = document.getElementById("middleFirework_6Z_5PcRight");
const $topFirework_7Z_4PcLeft = document.getElementById("topFirework_7Z_4PcLeft");
const $topFirework_7Z_4PcRight = document.getElementById("topFirework_7Z_4PcRight");
const $middleFirework_6Z_3PcLeft = document.getElementById("middleFirework_6Z_3PcLeft");
const $middleFirework_6Z_3PcRight = document.getElementById("middleFirework_6Z_3PcRight");
const $bottomFirework_5Z_2PcLeft = document.getElementById("bottomFirework_5Z_2PcLeft");
const $bottomFirework_5Z_2PcRight = document.getElementById("bottomFirework_5Z_2PcRight");
const $middleFirework_6Z_1PcLeft = document.getElementById("middleFirework_6Z_1PcLeft");
const $middleFirework_6Z_1PcRight = document.getElementById("middleFirework_6Z_1PcRight");
const $topFirework_7Z_0PcLeft = document.getElementById("topFirework_7Z_0PcLeft");
const $topFirework_7Z_0PcRight = document.getElementById("topFirework_7Z_0PcRight");
const $axeFireworkExplosionPcDefendedLeft = document.getElementById("axeFireworkExplosionPcDefendedLeft");
const $axeFireworkExplosionPcDefendedRight = document.getElementById("axeFireworkExplosionPcDefendedRight");
const $axeSmokePcFullMinus9DefendedLeft = document.getElementById("axeSmokePcFullMinus9DefendedLeft");
const $axeSmokePcFullMinus8DefendedLeft = document.getElementById("axeSmokePcFullMinus8DefendedLeft");
const $axeSmokePcFullMinus7DefendedLeft = document.getElementById("axeSmokePcFullMinus7DefendedLeft");
const $axeSmokePcFullMinus6DefendedLeft = document.getElementById("axeSmokePcFullMinus6DefendedLeft");
const $axeSmokePcFullMinus5DefendedLeft = document.getElementById("axeSmokePcFullMinus5DefendedLeft");
const $axeSmokePcFullMinus4DefendedLeft = document.getElementById("axeSmokePcFullMinus4DefendedLeft");
const $axeSmokePcFullMinus3DefendedLeft = document.getElementById("axeSmokePcFullMinus3DefendedLeft");
const $axeSmokePcFullMinus2DefendedLeft = document.getElementById("axeSmokePcFullMinus2DefendedLeft");
const $axeSmokePcFullMinus1DefendedLeft = document.getElementById("axeSmokePcFullMinus1DefendedLeft");
const $axeSmokePcFullDefendedLeft = document.getElementById("axeSmokePcFullDefendedLeft");
const $axeSmokePcFullMinus9DefendedRight = document.getElementById("axeSmokePcFullMinus9DefendedRight");
const $axeSmokePcFullMinus8DefendedRight = document.getElementById("axeSmokePcFullMinus8DefendedRight");
const $axeSmokePcFullMinus7DefendedRight = document.getElementById("axeSmokePcFullMinus7DefendedRight");
const $axeSmokePcFullMinus6DefendedRight = document.getElementById("axeSmokePcFullMinus6DefendedRight");
const $axeSmokePcFullMinus5DefendedRight = document.getElementById("axeSmokePcFullMinus5DefendedRight");
const $axeSmokePcFullMinus4DefendedRight = document.getElementById("axeSmokePcFullMinus4DefendedRight");
const $axeSmokePcFullMinus3DefendedRight = document.getElementById("axeSmokePcFullMinus3DefendedRight");
const $axeSmokePcFullMinus2DefendedRight = document.getElementById("axeSmokePcFullMinus2DefendedRight");
const $axeSmokePcFullMinus1DefendedRight = document.getElementById("axeSmokePcFullMinus1DefendedRight");
const $axeSmokePcFullDefendedRight = document.getElementById("axeSmokePcFullDefendedRight");
const $bowFireworkExplosionPcDefendedLeft = document.getElementById("bowFireworkExplosionPcDefendedLeft");
const $bowFireworkExplosionPcDefendedRight = document.getElementById("bowFireworkExplosionPcDefendedRight");
const $bowSmokePcFullMinus9DefendedLeft = document.getElementById("bowSmokePcFullMinus9DefendedLeft");
const $bowSmokePcFullMinus8DefendedLeft = document.getElementById("bowSmokePcFullMinus8DefendedLeft");
const $bowSmokePcFullMinus7DefendedLeft = document.getElementById("bowSmokePcFullMinus7DefendedLeft");
const $bowSmokePcFullMinus6DefendedLeft = document.getElementById("bowSmokePcFullMinus6DefendedLeft");
const $bowSmokePcFullMinus5DefendedLeft = document.getElementById("bowSmokePcFullMinus5DefendedLeft");
const $bowSmokePcFullMinus4DefendedLeft = document.getElementById("bowSmokePcFullMinus4DefendedLeft");
const $bowSmokePcFullMinus3DefendedLeft = document.getElementById("bowSmokePcFullMinus3DefendedLeft");
const $bowSmokePcFullMinus2DefendedLeft = document.getElementById("bowSmokePcFullMinus2DefendedLeft");
const $bowSmokePcFullMinus1DefendedLeft = document.getElementById("bowSmokePcFullMinus1DefendedLeft");
const $bowSmokePcFullDefendedLeft = document.getElementById("bowSmokePcFullDefendedLeft");
const $bowSmokePcFullMinus9DefendedRight = document.getElementById("bowSmokePcFullMinus9DefendedRight");
const $bowSmokePcFullMinus8DefendedRight = document.getElementById("bowSmokePcFullMinus8DefendedRight");
const $bowSmokePcFullMinus7DefendedRight = document.getElementById("bowSmokePcFullMinus7DefendedRight");
const $bowSmokePcFullMinus6DefendedRight = document.getElementById("bowSmokePcFullMinus6DefendedRight");
const $bowSmokePcFullMinus5DefendedRight = document.getElementById("bowSmokePcFullMinus5DefendedRight");
const $bowSmokePcFullMinus4DefendedRight = document.getElementById("bowSmokePcFullMinus4DefendedRight");
const $bowSmokePcFullMinus3DefendedRight = document.getElementById("bowSmokePcFullMinus3DefendedRight");
const $bowSmokePcFullMinus2DefendedRight = document.getElementById("bowSmokePcFullMinus2DefendedRight");
const $bowSmokePcFullMinus1DefendedRight = document.getElementById("bowSmokePcFullMinus1DefendedRight");
const $bowSmokePcFullDefendedRight = document.getElementById("bowSmokePcFullDefendedRight");
const $swordFireworkExplosionPcDefendedLeft = document.getElementById("swordFireworkExplosionPcDefendedLeft");
const $swordFireworkExplosionPcDefendedRight = document.getElementById("swordFireworkExplosionPcDefendedRight");
const $swordSmokePcFullMinus9DefendedLeft = document.getElementById("swordSmokePcFullMinus9DefendedLeft");
const $swordSmokePcFullMinus8DefendedLeft = document.getElementById("swordSmokePcFullMinus8DefendedLeft");
const $swordSmokePcFullMinus7DefendedLeft = document.getElementById("swordSmokePcFullMinus7DefendedLeft");
const $swordSmokePcFullMinus6DefendedLeft = document.getElementById("swordSmokePcFullMinus6DefendedLeft");
const $swordSmokePcFullMinus5DefendedLeft = document.getElementById("swordSmokePcFullMinus5DefendedLeft");
const $swordSmokePcFullMinus4DefendedLeft = document.getElementById("swordSmokePcFullMinus4DefendedLeft");
const $swordSmokePcFullMinus3DefendedLeft = document.getElementById("swordSmokePcFullMinus3DefendedLeft");
const $swordSmokePcFullMinus2DefendedLeft = document.getElementById("swordSmokePcFullMinus2DefendedLeft");
const $swordSmokePcFullMinus1DefendedLeft = document.getElementById("swordSmokePcFullMinus1DefendedLeft");
const $swordSmokePcFullDefendedLeft = document.getElementById("swordSmokePcFullDefendedLeft");
const $swordSmokePcFullMinus9DefendedRight = document.getElementById("swordSmokePcFullMinus9DefendedRight");
const $swordSmokePcFullMinus8DefendedRight = document.getElementById("swordSmokePcFullMinus8DefendedRight");
const $swordSmokePcFullMinus7DefendedRight = document.getElementById("swordSmokePcFullMinus7DefendedRight");
const $swordSmokePcFullMinus6DefendedRight = document.getElementById("swordSmokePcFullMinus6DefendedRight");
const $swordSmokePcFullMinus5DefendedRight = document.getElementById("swordSmokePcFullMinus5DefendedRight");
const $swordSmokePcFullMinus4DefendedRight = document.getElementById("swordSmokePcFullMinus4DefendedRight");
const $swordSmokePcFullMinus3DefendedRight = document.getElementById("swordSmokePcFullMinus3DefendedRight");
const $swordSmokePcFullMinus2DefendedRight = document.getElementById("swordSmokePcFullMinus2DefendedRight");
const $swordSmokePcFullMinus1DefendedRight = document.getElementById("swordSmokePcFullMinus1DefendedRight");
const $swordSmokePcFullDefendedRight = document.getElementById("swordSmokePcFullDefendedRight");
const $axeBowFireworkExplosionPcDefendedLeft = document.getElementById("axeBowFireworkExplosionPcDefendedLeft");
const $axeBowFireworkExplosionPcDefendedRight = document.getElementById("axeBowFireworkExplosionPcDefendedRight");
const $axeBowSmokePcFullMinus9DefendedLeft = document.getElementById("axeBowSmokePcFullMinus9DefendedLeft");
const $axeBowSmokePcFullMinus8DefendedLeft = document.getElementById("axeBowSmokePcFullMinus8DefendedLeft");
const $axeBowSmokePcFullMinus7DefendedLeft = document.getElementById("axeBowSmokePcFullMinus7DefendedLeft");
const $axeBowSmokePcFullMinus6DefendedLeft = document.getElementById("axeBowSmokePcFullMinus6DefendedLeft");
const $axeBowSmokePcFullMinus5DefendedLeft = document.getElementById("axeBowSmokePcFullMinus5DefendedLeft");
const $axeBowSmokePcFullMinus4DefendedLeft = document.getElementById("axeBowSmokePcFullMinus4DefendedLeft");
const $axeBowSmokePcFullMinus3DefendedLeft = document.getElementById("axeBowSmokePcFullMinus3DefendedLeft");
const $axeBowSmokePcFullMinus2DefendedLeft = document.getElementById("axeBowSmokePcFullMinus2DefendedLeft");
const $axeBowSmokePcFullMinus1DefendedLeft = document.getElementById("axeBowSmokePcFullMinus1DefendedLeft");
const $axeBowSmokePcFullDefendedLeft = document.getElementById("axeBowSmokePcFullDefendedLeft");
const $axeBowSmokePcFullMinus9DefendedRight = document.getElementById("axeBowSmokePcFullMinus9DefendedRight");
const $axeBowSmokePcFullMinus8DefendedRight = document.getElementById("axeBowSmokePcFullMinus8DefendedRight");
const $axeBowSmokePcFullMinus7DefendedRight = document.getElementById("axeBowSmokePcFullMinus7DefendedRight");
const $axeBowSmokePcFullMinus6DefendedRight = document.getElementById("axeBowSmokePcFullMinus6DefendedRight");
const $axeBowSmokePcFullMinus5DefendedRight = document.getElementById("axeBowSmokePcFullMinus5DefendedRight");
const $axeBowSmokePcFullMinus4DefendedRight = document.getElementById("axeBowSmokePcFullMinus4DefendedRight");
const $axeBowSmokePcFullMinus3DefendedRight = document.getElementById("axeBowSmokePcFullMinus3DefendedRight");
const $axeBowSmokePcFullMinus2DefendedRight = document.getElementById("axeBowSmokePcFullMinus2DefendedRight");
const $axeBowSmokePcFullMinus1DefendedRight = document.getElementById("axeBowSmokePcFullMinus1DefendedRight");
const $axeBowSmokePcFullDefendedRight = document.getElementById("axeBowSmokePcFullDefendedRight");
const $axeSwordFireworkExplosionPcDefendedLeft = document.getElementById("axeSwordFireworkExplosionPcDefendedLeft");
const $axeSwordFireworkExplosionPcDefendedRight = document.getElementById("axeSwordFireworkExplosionPcDefendedRight");
const $axeSwordSmokePcFullMinus9DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus9DefendedLeft");
const $axeSwordSmokePcFullMinus8DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus8DefendedLeft");
const $axeSwordSmokePcFullMinus7DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus7DefendedLeft");
const $axeSwordSmokePcFullMinus6DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus6DefendedLeft");
const $axeSwordSmokePcFullMinus5DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus5DefendedLeft");
const $axeSwordSmokePcFullMinus4DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus4DefendedLeft");
const $axeSwordSmokePcFullMinus3DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus3DefendedLeft");
const $axeSwordSmokePcFullMinus2DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus2DefendedLeft");
const $axeSwordSmokePcFullMinus1DefendedLeft = document.getElementById("axeSwordSmokePcFullMinus1DefendedLeft");
const $axeSwordSmokePcFullDefendedLeft = document.getElementById("axeSwordSmokePcFullDefendedLeft");
const $axeSwordSmokePcFullMinus9DefendedRight = document.getElementById("axeSwordSmokePcFullMinus9DefendedRight");
const $axeSwordSmokePcFullMinus8DefendedRight = document.getElementById("axeSwordSmokePcFullMinus8DefendedRight");
const $axeSwordSmokePcFullMinus7DefendedRight = document.getElementById("axeSwordSmokePcFullMinus7DefendedRight");
const $axeSwordSmokePcFullMinus6DefendedRight = document.getElementById("axeSwordSmokePcFullMinus6DefendedRight");
const $axeSwordSmokePcFullMinus5DefendedRight = document.getElementById("axeSwordSmokePcFullMinus5DefendedRight");
const $axeSwordSmokePcFullMinus4DefendedRight = document.getElementById("axeSwordSmokePcFullMinus4DefendedRight");
const $axeSwordSmokePcFullMinus3DefendedRight = document.getElementById("axeSwordSmokePcFullMinus3DefendedRight");
const $axeSwordSmokePcFullMinus2DefendedRight = document.getElementById("axeSwordSmokePcFullMinus2DefendedRight");
const $axeSwordSmokePcFullMinus1DefendedRight = document.getElementById("axeSwordSmokePcFullMinus1DefendedRight");
const $axeSwordSmokePcFullDefendedRight = document.getElementById("axeSwordSmokePcFullDefendedRight");
const $bowSwordFireworkExplosionPcDefendedLeft = document.getElementById("bowSwordFireworkExplosionPcDefendedLeft");
const $bowSwordFireworkExplosionPcDefendedRight = document.getElementById("bowSwordFireworkExplosionPcDefendedRight");
const $bowSwordSmokePcFullMinus9DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus9DefendedLeft");
const $bowSwordSmokePcFullMinus8DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus8DefendedLeft");
const $bowSwordSmokePcFullMinus7DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus7DefendedLeft");
const $bowSwordSmokePcFullMinus6DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus6DefendedLeft");
const $bowSwordSmokePcFullMinus5DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus5DefendedLeft");
const $bowSwordSmokePcFullMinus4DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus4DefendedLeft");
const $bowSwordSmokePcFullMinus3DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus3DefendedLeft");
const $bowSwordSmokePcFullMinus2DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus2DefendedLeft");
const $bowSwordSmokePcFullMinus1DefendedLeft = document.getElementById("bowSwordSmokePcFullMinus1DefendedLeft");
const $bowSwordSmokePcFullDefendedLeft = document.getElementById("bowSwordSmokePcFullDefendedLeft");
const $bowSwordSmokePcFullMinus9DefendedRight = document.getElementById("bowSwordSmokePcFullMinus9DefendedRight");
const $bowSwordSmokePcFullMinus8DefendedRight = document.getElementById("bowSwordSmokePcFullMinus8DefendedRight");
const $bowSwordSmokePcFullMinus7DefendedRight = document.getElementById("bowSwordSmokePcFullMinus7DefendedRight");
const $bowSwordSmokePcFullMinus6DefendedRight = document.getElementById("bowSwordSmokePcFullMinus6DefendedRight");
const $bowSwordSmokePcFullMinus5DefendedRight = document.getElementById("bowSwordSmokePcFullMinus5DefendedRight");
const $bowSwordSmokePcFullMinus4DefendedRight = document.getElementById("bowSwordSmokePcFullMinus4DefendedRight");
const $bowSwordSmokePcFullMinus3DefendedRight = document.getElementById("bowSwordSmokePcFullMinus3DefendedRight");
const $bowSwordSmokePcFullMinus2DefendedRight = document.getElementById("bowSwordSmokePcFullMinus2DefendedRight");
const $bowSwordSmokePcFullMinus1DefendedRight = document.getElementById("bowSwordSmokePcFullMinus1DefendedRight");
const $bowSwordSmokePcFullDefendedRight = document.getElementById("bowSwordSmokePcFullDefendedRight");
const $axeBowSwordFireworkExplosionPcDefendedLeft = document.getElementById("axeBowSwordFireworkExplosionPcDefendedLeft");
const $axeBowSwordFireworkExplosionPcDefendedRight = document.getElementById("axeBowSwordFireworkExplosionPcDefendedRight");
const $axeBowSwordSmokePcFullMinus9DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus9DefendedLeft");
const $axeBowSwordSmokePcFullMinus8DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus8DefendedLeft");
const $axeBowSwordSmokePcFullMinus7DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus7DefendedLeft");
const $axeBowSwordSmokePcFullMinus6DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus6DefendedLeft");
const $axeBowSwordSmokePcFullMinus5DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus5DefendedLeft");
const $axeBowSwordSmokePcFullMinus4DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus4DefendedLeft");
const $axeBowSwordSmokePcFullMinus3DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus3DefendedLeft");
const $axeBowSwordSmokePcFullMinus2DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus2DefendedLeft");
const $axeBowSwordSmokePcFullMinus1DefendedLeft = document.getElementById("axeBowSwordSmokePcFullMinus1DefendedLeft");
const $axeBowSwordSmokePcFullDefendedLeft = document.getElementById("axeBowSwordSmokePcFullDefendedLeft");
const $axeBowSwordSmokePcFullMinus9DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus9DefendedRight");
const $axeBowSwordSmokePcFullMinus8DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus8DefendedRight");
const $axeBowSwordSmokePcFullMinus7DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus7DefendedRight");
const $axeBowSwordSmokePcFullMinus6DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus6DefendedRight");
const $axeBowSwordSmokePcFullMinus5DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus5DefendedRight");
const $axeBowSwordSmokePcFullMinus4DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus4DefendedRight");
const $axeBowSwordSmokePcFullMinus3DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus3DefendedRight");
const $axeBowSwordSmokePcFullMinus2DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus2DefendedRight");
const $axeBowSwordSmokePcFullMinus1DefendedRight = document.getElementById("axeBowSwordSmokePcFullMinus1DefendedRight");
const $axeBowSwordSmokePcFullDefendedRight = document.getElementById("axeBowSwordSmokePcFullDefendedRight");
const $fireworkAxePcDefendedLeft = document.getElementById("fireworkAxePcDefendedLeft");
const $fireworkBowPcDefendedLeft = document.getElementById("fireworkBowPcDefendedLeft");
const $fireworkSwordPcDefendedLeft = document.getElementById("fireworkSwordPcDefendedLeft");
const $fireworkAxePcDefendedRight = document.getElementById("fireworkAxePcDefendedRight");
const $fireworkBowPcDefendedRight = document.getElementById("fireworkBowPcDefendedRight");
const $fireworkSwordPcDefendedRight = document.getElementById("fireworkSwordPcDefendedRight");
const $fireworkAxeShimmerPcFullDefendedLeft = document.getElementById("fireworkAxeShimmerPcFullDefendedLeft");
const $fireworkBowShimmerPcFullDefendedLeft = document.getElementById("fireworkBowShimmerPcFullDefendedLeft");
const $fireworkSwordShimmerPcFullDefendedLeft = document.getElementById("fireworkSwordShimmerPcFullDefendedLeft");
const $fireworkAxeShimmerPcFullDefendedRight = document.getElementById("fireworkAxeShimmerPcFullDefendedRight");
const $fireworkBowShimmerPcFullDefendedRight = document.getElementById("fireworkBowShimmerPcFullDefendedRight");
const $fireworkSwordShimmerPcFullDefendedRight = document.getElementById("fireworkSwordShimmerPcFullDefendedRight");

//npc greyWiz

const $greyWizArmNpcDefaultLeft = document.getElementById("greyWizArmNpcDefaultLeft");
const $greyWizArmNpcDefaultRight = document.getElementById("greyWizArmNpcDefaultRight");
const $greyWizArmNpcDefendLeft = document.getElementById("greyWizArmNpcDefendLeft");
const $greyWizArmNpcDefendRight = document.getElementById("greyWizArmNpcDefendRight");
const $greyWizNpcWithoutArms = document.getElementById("greyWizNpcWithoutArms");
const $greyWizNpcStruckLeft = document.getElementById("greyWizNpcStruckLeft");
const $greyWizNpcStruckRight = document.getElementById("greyWizNpcStruckRight");
const $greyWizNpcWithoutHands = document.getElementById("greyWizNpcWithoutHands");
const $greyWizHandNpcDefaultLeft = document.getElementById("greyWizHandNpcDefaultLeft");
const $greyWizHandNpc15DegreesLeft = document.getElementById("greyWizHandNpc15DegreesLeft");
const $greyWizHandNpc30DegreesLeft = document.getElementById("greyWizHandNpc30DegreesLeft");
const $greyWizHandNpc45DegreesLeft = document.getElementById("greyWizHandNpc45DegreesLeft");
const $greyWizHandNpcDefaultRight = document.getElementById("greyWizHandNpcDefaultRight");
const $greyWizHandNpc345DegreesRight = document.getElementById("greyWizHandNpc345DegreesRight");
const $greyWizHandNpc330DegreesRight = document.getElementById("greyWizHandNpc330DegreesRight");
const $greyWizHandNpc315DegreesRight = document.getElementById("greyWizHandNpc315DegreesRight");
const $protrudingFireworkTop_0NpcLeft = document.getElementById("protrudingFireworkTop_0NpcLeft");
const $protrudingFireworkTop_1NpcLeft = document.getElementById("protrudingFireworkTop_1NpcLeft");
const $protrudingFireworkTop_2NpcLeft = document.getElementById("protrudingFireworkTop_2NpcLeft");
const $protrudingFireworkTop_3NpcLeft = document.getElementById("protrudingFireworkTop_3NpcLeft");
const $protrudingFireworkTop_4NpcLeft = document.getElementById("protrudingFireworkTop_4NpcLeft");
const $protrudingFireworkTop_5NpcLeft = document.getElementById("protrudingFireworkTop_5NpcLeft");
const $protrudingFireworkTop_6NpcLeft = document.getElementById("protrudingFireworkTop_6NpcLeft");
const $protrudingFireworkTop_7NpcLeft = document.getElementById("protrudingFireworkTop_7NpcLeft");
const $protrudingFireworkTop_0NpcRight = document.getElementById("protrudingFireworkTop_0NpcRight");
const $protrudingFireworkTop_1NpcRight = document.getElementById("protrudingFireworkTop_1NpcRight");
const $protrudingFireworkTop_2NpcRight = document.getElementById("protrudingFireworkTop_2NpcRight");
const $protrudingFireworkTop_3NpcRight = document.getElementById("protrudingFireworkTop_3NpcRight");
const $protrudingFireworkTop_4NpcRight = document.getElementById("protrudingFireworkTop_4NpcRight");
const $protrudingFireworkTop_5NpcRight = document.getElementById("protrudingFireworkTop_5NpcRight");
const $protrudingFireworkTop_6NpcRight = document.getElementById("protrudingFireworkTop_6NpcRight");
const $protrudingFireworkTop_7NpcRight = document.getElementById("protrudingFireworkTop_7NpcRight");
const $protrudingFireworkMiddle_0NpcLeft = document.getElementById("protrudingFireworkMiddle_0NpcLeft");
const $protrudingFireworkMiddle_1NpcLeft = document.getElementById("protrudingFireworkMiddle_1NpcLeft");
const $protrudingFireworkMiddle_2NpcLeft = document.getElementById("protrudingFireworkMiddle_2NpcLeft");
const $protrudingFireworkMiddle_3NpcLeft = document.getElementById("protrudingFireworkMiddle_3NpcLeft");
const $protrudingFireworkMiddle_4NpcLeft = document.getElementById("protrudingFireworkMiddle_4NpcLeft");
const $protrudingFireworkMiddle_5NpcLeft = document.getElementById("protrudingFireworkMiddle_5NpcLeft");
const $protrudingFireworkMiddle_6NpcLeft = document.getElementById("protrudingFireworkMiddle_6NpcLeft");
const $protrudingFireworkMiddle_7NpcLeft = document.getElementById("protrudingFireworkMiddle_7NpcLeft");
const $protrudingFireworkMiddle_0NpcRight = document.getElementById("protrudingFireworkMiddle_0NpcRight");
const $protrudingFireworkMiddle_1NpcRight = document.getElementById("protrudingFireworkMiddle_1NpcRight");
const $protrudingFireworkMiddle_2NpcRight = document.getElementById("protrudingFireworkMiddle_2NpcRight");
const $protrudingFireworkMiddle_3NpcRight = document.getElementById("protrudingFireworkMiddle_3NpcRight");
const $protrudingFireworkMiddle_4NpcRight = document.getElementById("protrudingFireworkMiddle_4NpcRight");
const $protrudingFireworkMiddle_5NpcRight = document.getElementById("protrudingFireworkMiddle_5NpcRight");
const $protrudingFireworkMiddle_6NpcRight = document.getElementById("protrudingFireworkMiddle_6NpcRight");
const $protrudingFireworkMiddle_7NpcRight = document.getElementById("protrudingFireworkMiddle_7NpcRight");
const $protrudingFireworkBottom_0NpcLeft = document.getElementById("protrudingFireworkBottom_0NpcLeft");
const $protrudingFireworkBottom_1NpcLeft = document.getElementById("protrudingFireworkBottom_1NpcLeft");
const $protrudingFireworkBottom_2NpcLeft = document.getElementById("protrudingFireworkBottom_2NpcLeft");
const $protrudingFireworkBottom_3NpcLeft = document.getElementById("protrudingFireworkBottom_3NpcLeft");
const $protrudingFireworkBottom_4NpcLeft = document.getElementById("protrudingFireworkBottom_4NpcLeft");
const $protrudingFireworkBottom_5NpcLeft = document.getElementById("protrudingFireworkBottom_5NpcLeft");
const $protrudingFireworkBottom_6NpcLeft = document.getElementById("protrudingFireworkBottom_6NpcLeft");
const $protrudingFireworkBottom_7NpcLeft = document.getElementById("protrudingFireworkBottom_7NpcLeft");
const $protrudingFireworkBottom_0NpcRight = document.getElementById("protrudingFireworkBottom_0NpcRight");
const $protrudingFireworkBottom_1NpcRight = document.getElementById("protrudingFireworkBottom_1NpcRight");
const $protrudingFireworkBottom_2NpcRight = document.getElementById("protrudingFireworkBottom_2NpcRight");
const $protrudingFireworkBottom_3NpcRight = document.getElementById("protrudingFireworkBottom_3NpcRight");
const $protrudingFireworkBottom_4NpcRight = document.getElementById("protrudingFireworkBottom_4NpcRight");
const $protrudingFireworkBottom_5NpcRight = document.getElementById("protrudingFireworkBottom_5NpcRight");
const $protrudingFireworkBottom_6NpcRight = document.getElementById("protrudingFireworkBottom_6NpcRight");
const $protrudingFireworkBottom_7NpcRight = document.getElementById("protrudingFireworkBottom_7NpcRight");
const $topFirework_0NpcLeft = document.getElementById("topFirework_0NpcLeft");
const $topFirework_1NpcLeft = document.getElementById("topFirework_1NpcLeft");
const $topFirework_2NpcLeft = document.getElementById("topFirework_2NpcLeft");
const $topFirework_3NpcLeft = document.getElementById("topFirework_3NpcLeft");
const $topFirework_4NpcLeft = document.getElementById("topFirework_4NpcLeft");
const $topFirework_5NpcLeft = document.getElementById("topFirework_5NpcLeft");
const $topFirework_6NpcLeft = document.getElementById("topFirework_6NpcLeft");
const $topFirework_0NpcRight = document.getElementById("topFirework_0NpcRight");
const $topFirework_1NpcRight = document.getElementById("topFirework_1NpcRight");
const $topFirework_2NpcRight = document.getElementById("topFirework_2NpcRight");
const $topFirework_3NpcRight = document.getElementById("topFirework_3NpcRight");
const $topFirework_4NpcRight = document.getElementById("topFirework_4NpcRight");
const $topFirework_5NpcRight = document.getElementById("topFirework_5NpcRight");
const $topFirework_6NpcRight = document.getElementById("topFirework_6NpcRight");
const $middleFirework_0NpcLeft = document.getElementById("middleFirework_0NpcLeft");
const $middleFirework_1NpcLeft = document.getElementById("middleFirework_1NpcLeft");
const $middleFirework_2NpcLeft = document.getElementById("middleFirework_2NpcLeft");
const $middleFirework_0NpcRight = document.getElementById("middleFirework_0NpcRight");
const $middleFirework_1NpcRight = document.getElementById("middleFirework_1NpcRight");
const $middleFirework_2NpcRight = document.getElementById("middleFirework_2NpcRight");
const $topFirework_3Z_1NpcLeft = document.getElementById("topFirework_3Z_1NpcLeft");
const $topFirework_3Z_1NpcRight = document.getElementById("topFirework_3Z_1NpcRight");
const $middleFirework_3NpcLeft = document.getElementById("middleFirework_3NpcLeft");
const $middleFirework_4NpcLeft = document.getElementById("middleFirework_4NpcLeft");
const $middleFirework_5NpcLeft = document.getElementById("middleFirework_5NpcLeft");
const $middleFirework_3NpcRight = document.getElementById("middleFirework_3NpcRight");
const $middleFirework_4NpcRight = document.getElementById("middleFirework_4NpcRight");
const $middleFirework_5NpcRight = document.getElementById("middleFirework_5NpcRight");
const $bottomFirework_0NpcLeft = document.getElementById("bottomFirework_0NpcLeft");
const $bottomFirework_1NpcLeft = document.getElementById("bottomFirework_1NpcLeft");
const $bottomFirework_0NpcRight = document.getElementById("bottomFirework_0NpcRight");
const $bottomFirework_1NpcRight = document.getElementById("bottomFirework_1NpcRight");
const $middleFirework_2Z_2NpcLeft = document.getElementById("middleFirework_2Z_2NpcLeft");
const $middleFirework_2Z_2NpcRight = document.getElementById("middleFirework_2Z_2NpcRight");
const $bottomFirework_2NpcLeft = document.getElementById("bottomFirework_2NpcLeft");
const $bottomFirework_2NpcRight = document.getElementById("bottomFirework_2NpcRight");
const $middleFirework_3Z_2NpcLeft = document.getElementById("middleFirework_3Z_2NpcLeft");
const $middleFirework_3Z_2NpcRight = document.getElementById("middleFirework_3Z_2NpcRight");
const $topFirework_4Z_1NpcLeft = document.getElementById("topFirework_4Z_1NpcLeft");
const $topFirework_4Z_1NpcRight = document.getElementById("topFirework_4Z_1NpcRight");
const $bottomFirework_3NpcLeft = document.getElementById("bottomFirework_3NpcLeft");
const $bottomFirework_3NpcRight = document.getElementById("bottomFirework_3NpcRight");
const $middleFirework_4Z_2NpcLeft = document.getElementById("middleFirework_4Z_2NpcLeft");
const $middleFirework_4Z_2NpcRight = document.getElementById("middleFirework_4Z_2NpcRight");
const $topFirework_5Z_1NpcLeft = document.getElementById("topFirework_5Z_1NpcLeft");
const $topFirework_5Z_1NpcRight = document.getElementById("topFirework_5Z_1NpcRight");
const $bottomFirework_4NpcLeft = document.getElementById("bottomFirework_4NpcLeft");
const $bottomFirework_4NpcRight = document.getElementById("bottomFirework_4NpcRight");
const $middleFirework_5Z_4NpcLeft = document.getElementById("middleFirework_5Z_4NpcLeft");
const $middleFirework_5Z_4NpcRight = document.getElementById("middleFirework_5Z_4NpcRight");
const $topFirework_6Z_3NpcLeft = document.getElementById("topFirework_6Z_3NpcLeft");
const $topFirework_6Z_3NpcRight = document.getElementById("topFirework_6Z_3NpcRight");
const $middleFirework_5Z_2NpcLeft = document.getElementById("middleFirework_5Z_2NpcLeft");
const $middleFirework_5Z_2NpcRight = document.getElementById("middleFirework_5Z_2NpcRight");
const $topFirework_6Z_1NpcLeft = document.getElementById("topFirework_6Z_1NpcLeft");
const $topFirework_6Z_1NpcRight = document.getElementById("topFirework_6Z_1NpcRight");
const $axeFireworkExplosionNpcLeft = document.getElementById("axeFireworkExplosionNpcLeft");
const $axeFireworkExplosionNpcRight = document.getElementById("axeFireworkExplosionNpcRight");
const $axeSmokeNpcFullMinus10Left = document.getElementById("axeSmokeNpcFullMinus10Left");
const $axeSmokeNpcFullMinus9Left = document.getElementById("axeSmokeNpcFullMinus9Left");
const $axeSmokeNpcFullMinus8Left = document.getElementById("axeSmokeNpcFullMinus8Left");
const $axeSmokeNpcFullMinus7Left = document.getElementById("axeSmokeNpcFullMinus7Left");
const $axeSmokeNpcFullMinus6Left = document.getElementById("axeSmokeNpcFullMinus6Left");
const $axeSmokeNpcFullMinus5Left = document.getElementById("axeSmokeNpcFullMinus5Left");
const $axeSmokeNpcFullMinus4Left = document.getElementById("axeSmokeNpcFullMinus4Left");
const $axeSmokeNpcFullMinus3Left = document.getElementById("axeSmokeNpcFullMinus3Left");
const $axeSmokeNpcFullMinus2Left = document.getElementById("axeSmokeNpcFullMinus2Left");
const $axeSmokeNpcFullMinus1Left = document.getElementById("axeSmokeNpcFullMinus1Left");
const $axeSmokeNpcFullLeft = document.getElementById("axeSmokeNpcFullLeft");
const $axeSmokeNpcFullMinus10Right = document.getElementById("axeSmokeNpcFullMinus10Right");
const $axeSmokeNpcFullMinus9Right = document.getElementById("axeSmokeNpcFullMinus9Right");
const $axeSmokeNpcFullMinus8Right = document.getElementById("axeSmokeNpcFullMinus8Right");
const $axeSmokeNpcFullMinus7Right = document.getElementById("axeSmokeNpcFullMinus7Right");
const $axeSmokeNpcFullMinus6Right = document.getElementById("axeSmokeNpcFullMinus6Right");
const $axeSmokeNpcFullMinus5Right = document.getElementById("axeSmokeNpcFullMinus5Right");
const $axeSmokeNpcFullMinus4Right = document.getElementById("axeSmokeNpcFullMinus4Right");
const $axeSmokeNpcFullMinus3Right = document.getElementById("axeSmokeNpcFullMinus3Right");
const $axeSmokeNpcFullMinus2Right = document.getElementById("axeSmokeNpcFullMinus2Right");
const $axeSmokeNpcFullMinus1Right = document.getElementById("axeSmokeNpcFullMinus1Right");
const $axeSmokeNpcFullRight = document.getElementById("axeSmokeNpcFullRight");
const $bowFireworkExplosionNpcLeft = document.getElementById("bowFireworkExplosionNpcLeft");
const $bowFireworkExplosionNpcRight = document.getElementById("bowFireworkExplosionNpcRight");
const $bowSmokeNpcFullMinus10Left = document.getElementById("bowSmokeNpcFullMinus10Left");
const $bowSmokeNpcFullMinus9Left = document.getElementById("bowSmokeNpcFullMinus9Left");
const $bowSmokeNpcFullMinus8Left = document.getElementById("bowSmokeNpcFullMinus8Left");
const $bowSmokeNpcFullMinus7Left = document.getElementById("bowSmokeNpcFullMinus7Left");
const $bowSmokeNpcFullMinus6Left = document.getElementById("bowSmokeNpcFullMinus6Left");
const $bowSmokeNpcFullMinus5Left = document.getElementById("bowSmokeNpcFullMinus5Left");
const $bowSmokeNpcFullMinus4Left = document.getElementById("bowSmokeNpcFullMinus4Left");
const $bowSmokeNpcFullMinus3Left = document.getElementById("bowSmokeNpcFullMinus3Left");
const $bowSmokeNpcFullMinus2Left = document.getElementById("bowSmokeNpcFullMinus2Left");
const $bowSmokeNpcFullMinus1Left = document.getElementById("bowSmokeNpcFullMinus1Left");
const $bowSmokeNpcFullLeft = document.getElementById("bowSmokeNpcFullLeft");
const $bowSmokeNpcFullMinus10Right = document.getElementById("bowSmokeNpcFullMinus10Right");
const $bowSmokeNpcFullMinus9Right = document.getElementById("bowSmokeNpcFullMinus9Right");
const $bowSmokeNpcFullMinus8Right = document.getElementById("bowSmokeNpcFullMinus8Right");
const $bowSmokeNpcFullMinus7Right = document.getElementById("bowSmokeNpcFullMinus7Right");
const $bowSmokeNpcFullMinus6Right = document.getElementById("bowSmokeNpcFullMinus6Right");
const $bowSmokeNpcFullMinus5Right = document.getElementById("bowSmokeNpcFullMinus5Right");
const $bowSmokeNpcFullMinus4Right = document.getElementById("bowSmokeNpcFullMinus4Right");
const $bowSmokeNpcFullMinus3Right = document.getElementById("bowSmokeNpcFullMinus3Right");
const $bowSmokeNpcFullMinus2Right = document.getElementById("bowSmokeNpcFullMinus2Right");
const $bowSmokeNpcFullMinus1Right = document.getElementById("bowSmokeNpcFullMinus1Right");
const $bowSmokeNpcFullRight = document.getElementById("bowSmokeNpcFullRight");
const $swordFireworkExplosionNpcLeft = document.getElementById("swordFireworkExplosionNpcLeft");
const $swordFireworkExplosionNpcRight = document.getElementById("swordFireworkExplosionNpcRight");
const $swordSmokeNpcFullMinus10Left = document.getElementById("swordSmokeNpcFullMinus10Left");
const $swordSmokeNpcFullMinus9Left = document.getElementById("swordSmokeNpcFullMinus9Left");
const $swordSmokeNpcFullMinus8Left = document.getElementById("swordSmokeNpcFullMinus8Left");
const $swordSmokeNpcFullMinus7Left = document.getElementById("swordSmokeNpcFullMinus7Left");
const $swordSmokeNpcFullMinus6Left = document.getElementById("swordSmokeNpcFullMinus6Left");
const $swordSmokeNpcFullMinus5Left = document.getElementById("swordSmokeNpcFullMinus5Left");
const $swordSmokeNpcFullMinus4Left = document.getElementById("swordSmokeNpcFullMinus4Left");
const $swordSmokeNpcFullMinus3Left = document.getElementById("swordSmokeNpcFullMinus3Left");
const $swordSmokeNpcFullMinus2Left = document.getElementById("swordSmokeNpcFullMinus2Left");
const $swordSmokeNpcFullMinus1Left = document.getElementById("swordSmokeNpcFullMinus1Left");
const $swordSmokeNpcFullLeft = document.getElementById("swordSmokeNpcFullLeft");
const $swordSmokeNpcFullMinus10Right = document.getElementById("swordSmokeNpcFullMinus10Right");
const $swordSmokeNpcFullMinus9Right = document.getElementById("swordSmokeNpcFullMinus9Right");
const $swordSmokeNpcFullMinus8Right = document.getElementById("swordSmokeNpcFullMinus8Right");
const $swordSmokeNpcFullMinus7Right = document.getElementById("swordSmokeNpcFullMinus7Right");
const $swordSmokeNpcFullMinus6Right = document.getElementById("swordSmokeNpcFullMinus6Right");
const $swordSmokeNpcFullMinus5Right = document.getElementById("swordSmokeNpcFullMinus5Right");
const $swordSmokeNpcFullMinus4Right = document.getElementById("swordSmokeNpcFullMinus4Right");
const $swordSmokeNpcFullMinus3Right = document.getElementById("swordSmokeNpcFullMinus3Right");
const $swordSmokeNpcFullMinus2Right = document.getElementById("swordSmokeNpcFullMinus2Right");
const $swordSmokeNpcFullMinus1Right = document.getElementById("swordSmokeNpcFullMinus1Right");
const $swordSmokeNpcFullRight = document.getElementById("swordSmokeNpcFullRight");
const $axeBowFireworkExplosionNpcLeft = document.getElementById("axeBowFireworkExplosionNpcLeft");
const $axeBowFireworkExplosionNpcRight = document.getElementById("axeBowFireworkExplosionNpcRight");
const $axeBowSmokeNpcFullMinus10Left = document.getElementById("axeBowSmokeNpcFullMinus10Left");
const $axeBowSmokeNpcFullMinus9Left = document.getElementById("axeBowSmokeNpcFullMinus9Left");
const $axeBowSmokeNpcFullMinus8Left = document.getElementById("axeBowSmokeNpcFullMinus8Left");
const $axeBowSmokeNpcFullMinus7Left = document.getElementById("axeBowSmokeNpcFullMinus7Left");
const $axeBowSmokeNpcFullMinus6Left = document.getElementById("axeBowSmokeNpcFullMinus6Left");
const $axeBowSmokeNpcFullMinus5Left = document.getElementById("axeBowSmokeNpcFullMinus5Left");
const $axeBowSmokeNpcFullMinus4Left = document.getElementById("axeBowSmokeNpcFullMinus4Left");
const $axeBowSmokeNpcFullMinus3Left = document.getElementById("axeBowSmokeNpcFullMinus3Left");
const $axeBowSmokeNpcFullMinus2Left = document.getElementById("axeBowSmokeNpcFullMinus2Left");
const $axeBowSmokeNpcFullMinus1Left = document.getElementById("axeBowSmokeNpcFullMinus1Left");
const $axeBowSmokeFullNpcLeft = document.getElementById("axeBowSmokeNpcFullLeft");
const $axeBowSmokeNpcFullMinus10Right = document.getElementById("axeBowSmokeNpcFullMinus10Right");
const $axeBowSmokeNpcFullMinus9Right = document.getElementById("axeBowSmokeNpcFullMinus9Right");
const $axeBowSmokeNpcFullMinus8Right = document.getElementById("axeBowSmokeNpcFullMinus8Right");
const $axeBowSmokeNpcFullMinus7Right = document.getElementById("axeBowSmokeNpcFullMinus7Right");
const $axeBowSmokeNpcFullMinus6Right = document.getElementById("axeBowSmokeNpcFullMinus6Right");
const $axeBowSmokeNpcFullMinus5Right = document.getElementById("axeBowSmokeNpcFullMinus5Right");
const $axeBowSmokeNpcFullMinus4Right = document.getElementById("axeBowSmokeNpcFullMinus4Right");
const $axeBowSmokeNpcFullMinus3Right = document.getElementById("axeBowSmokeNpcFullMinus3Right");
const $axeBowSmokeNpcFullMinus2Right = document.getElementById("axeBowSmokeNpcFullMinus2Right");
const $axeBowSmokeNpcFullMinus1Right = document.getElementById("axeBowSmokeNpcFullMinus1Right");
const $axeBowSmokeFullNpcRight = document.getElementById("axeBowSmokeNpcFullRight");
const $axeSwordFireworkExplosionNpcLeft = document.getElementById("axeSwordFireworkExplosionNpcLeft");
const $axeSwordFireworkExplosionNpcRight = document.getElementById("axeSwordFireworkExplosionNpcRight");
const $axeSwordSmokeNpcFullMinus10Left = document.getElementById("axeSwordSmokeNpcFullMinus10Left");
const $axeSwordSmokeNpcFullMinus9Left = document.getElementById("axeSwordSmokeNpcFullMinus9Left");
const $axeSwordSmokeNpcFullMinus8Left = document.getElementById("axeSwordSmokeNpcFullMinus8Left");
const $axeSwordSmokeNpcFullMinus7Left = document.getElementById("axeSwordSmokeNpcFullMinus7Left");
const $axeSwordSmokeNpcFullMinus6Left = document.getElementById("axeSwordSmokeNpcFullMinus6Left");
const $axeSwordSmokeNpcFullMinus5Left = document.getElementById("axeSwordSmokeNpcFullMinus5Left");
const $axeSwordSmokeNpcFullMinus4Left = document.getElementById("axeSwordSmokeNpcFullMinus4Left");
const $axeSwordSmokeNpcFullMinus3Left = document.getElementById("axeSwordSmokeNpcFullMinus3Left");
const $axeSwordSmokeNpcFullMinus2Left = document.getElementById("axeSwordSmokeNpcFullMinus2Left");
const $axeSwordSmokeNpcFullMinus1Left = document.getElementById("axeSwordSmokeNpcFullMinus1Left");
const $axeSwordSmokeNpcFullLeft = document.getElementById("axeSwordSmokeNpcFullLeft");
const $axeSwordSmokeNpcFullMinus10Right = document.getElementById("axeSwordSmokeNpcFullMinus10Right");
const $axeSwordSmokeNpcFullMinus9Right = document.getElementById("axeSwordSmokeNpcFullMinus9Right");
const $axeSwordSmokeNpcFullMinus8Right = document.getElementById("axeSwordSmokeNpcFullMinus8Right");
const $axeSwordSmokeNpcFullMinus7Right = document.getElementById("axeSwordSmokeNpcFullMinus7Right");
const $axeSwordSmokeNpcFullMinus6Right = document.getElementById("axeSwordSmokeNpcFullMinus6Right");
const $axeSwordSmokeNpcFullMinus5Right = document.getElementById("axeSwordSmokeNpcFullMinus5Right");
const $axeSwordSmokeNpcFullMinus4Right = document.getElementById("axeSwordSmokeNpcFullMinus4Right");
const $axeSwordSmokeNpcFullMinus3Right = document.getElementById("axeSwordSmokeNpcFullMinus3Right");
const $axeSwordSmokeNpcFullMinus2Right = document.getElementById("axeSwordSmokeNpcFullMinus2Right");
const $axeSwordSmokeNpcFullMinus1Right = document.getElementById("axeSwordSmokeNpcFullMinus1Right");
const $axeSwordSmokeNpcFullRight = document.getElementById("axeSwordSmokeNpcFullRight");
const $bowSwordFireworkExplosionNpcLeft = document.getElementById("bowSwordFireworkExplosionNpcLeft");
const $bowSwordFireworkExplosionNpcRight = document.getElementById("bowSwordFireworkExplosionNpcRight");
const $bowSwordSmokeNpcFullMinus10Left = document.getElementById("bowSwordSmokeNpcFullMinus10Left");
const $bowSwordSmokeNpcFullMinus9Left = document.getElementById("bowSwordSmokeNpcFullMinus9Left");
const $bowSwordSmokeNpcFullMinus8Left = document.getElementById("bowSwordSmokeNpcFullMinus8Left");
const $bowSwordSmokeNpcFullMinus7Left = document.getElementById("bowSwordSmokeNpcFullMinus7Left");
const $bowSwordSmokeNpcFullMinus6Left = document.getElementById("bowSwordSmokeNpcFullMinus6Left");
const $bowSwordSmokeNpcFullMinus5Left = document.getElementById("bowSwordSmokeNpcFullMinus5Left");
const $bowSwordSmokeNpcFullMinus4Left = document.getElementById("bowSwordSmokeNpcFullMinus4Left");
const $bowSwordSmokeNpcFullMinus3Left = document.getElementById("bowSwordSmokeNpcFullMinus3Left");
const $bowSwordSmokeNpcFullMinus2Left = document.getElementById("bowSwordSmokeNpcFullMinus2Left");
const $bowSwordSmokeNpcFullMinus1Left = document.getElementById("bowSwordSmokeNpcFullMinus1Left");
const $bowSwordSmokeNpcFullLeft = document.getElementById("bowSwordSmokeNpcFullLeft");
const $bowSwordSmokeNpcFullMinus10Right = document.getElementById("bowSwordSmokeNpcFullMinus10Right");
const $bowSwordSmokeNpcFullMinus9Right = document.getElementById("bowSwordSmokeNpcFullMinus9Right");
const $bowSwordSmokeNpcFullMinus8Right = document.getElementById("bowSwordSmokeNpcFullMinus8Right");
const $bowSwordSmokeNpcFullMinus7Right = document.getElementById("bowSwordSmokeNpcFullMinus7Right");
const $bowSwordSmokeNpcFullMinus6Right = document.getElementById("bowSwordSmokeNpcFullMinus6Right");
const $bowSwordSmokeNpcFullMinus5Right = document.getElementById("bowSwordSmokeNpcFullMinus5Right");
const $bowSwordSmokeNpcFullMinus4Right = document.getElementById("bowSwordSmokeNpcFullMinus4Right");
const $bowSwordSmokeNpcFullMinus3Right = document.getElementById("bowSwordSmokeNpcFullMinus3Right");
const $bowSwordSmokeNpcFullMinus2Right = document.getElementById("bowSwordSmokeNpcFullMinus2Right");
const $bowSwordSmokeNpcFullMinus1Right = document.getElementById("bowSwordSmokeNpcFullMinus1Right");
const $bowSwordSmokeNpcFullRight = document.getElementById("bowSwordSmokeNpcFullRight");
const $axeBowSwordFireworkExplosionNpcLeft = document.getElementById("axeBowSwordFireworkExplosionNpcLeft");
const $axeBowSwordFireworkExplosionNpcRight = document.getElementById("axeBowSwordFireworkExplosionNpcRight");
const $axeBowSwordSmokeNpcFullMinus10Left = document.getElementById("axeBowSwordSmokeNpcFullMinus10Left");
const $axeBowSwordSmokeNpcFullMinus9Left = document.getElementById("axeBowSwordSmokeNpcFullMinus9Left");
const $axeBowSwordSmokeNpcFullMinus8Left = document.getElementById("axeBowSwordSmokeNpcFullMinus8Left");
const $axeBowSwordSmokeNpcFullMinus7Left = document.getElementById("axeBowSwordSmokeNpcFullMinus7Left");
const $axeBowSwordSmokeNpcFullMinus6Left = document.getElementById("axeBowSwordSmokeNpcFullMinus6Left");
const $axeBowSwordSmokeNpcFullMinus5Left = document.getElementById("axeBowSwordSmokeNpcFullMinus5Left");
const $axeBowSwordSmokeNpcFullMinus4Left = document.getElementById("axeBowSwordSmokeNpcFullMinus4Left");
const $axeBowSwordSmokeNpcFullMinus3Left = document.getElementById("axeBowSwordSmokeNpcFullMinus3Left");
const $axeBowSwordSmokeNpcFullMinus2Left = document.getElementById("axeBowSwordSmokeNpcFullMinus2Left");
const $axeBowSwordSmokeNpcFullMinus1Left = document.getElementById("axeBowSwordSmokeNpcFullMinus1Left");
const $axeBowSwordSmokeNpcFullLeft = document.getElementById("axeBowSwordSmokeNpcFullLeft");
const $axeBowSwordSmokeNpcFullMinus10Right = document.getElementById("axeBowSwordSmokeNpcFullMinus10Right");
const $axeBowSwordSmokeNpcFullMinus9Right = document.getElementById("axeBowSwordSmokeNpcFullMinus9Right");
const $axeBowSwordSmokeNpcFullMinus8Right = document.getElementById("axeBowSwordSmokeNpcFullMinus8Right");
const $axeBowSwordSmokeNpcFullMinus7Right = document.getElementById("axeBowSwordSmokeNpcFullMinus7Right");
const $axeBowSwordSmokeNpcFullMinus6Right = document.getElementById("axeBowSwordSmokeNpcFullMinus6Right");
const $axeBowSwordSmokeNpcFullMinus5Right = document.getElementById("axeBowSwordSmokeNpcFullMinus5Right");
const $axeBowSwordSmokeNpcFullMinus4Right = document.getElementById("axeBowSwordSmokeNpcFullMinus4Right");
const $axeBowSwordSmokeNpcFullMinus3Right = document.getElementById("axeBowSwordSmokeNpcFullMinus3Right");
const $axeBowSwordSmokeNpcFullMinus2Right = document.getElementById("axeBowSwordSmokeNpcFullMinus2Right");
const $axeBowSwordSmokeNpcFullMinus1Right = document.getElementById("axeBowSwordSmokeNpcFullMinus1Right");
const $axeBowSwordSmokeNpcFullRight = document.getElementById("axeBowSwordSmokeNpcFullRight");
const $fireworkAxeNpcLeft = document.getElementById("fireworkAxeNpcLeft");
const $fireworkBowNpcLeft = document.getElementById("fireworkBowNpcLeft");
const $fireworkSwordNpcLeft = document.getElementById("fireworkSwordNpcLeft");
const $fireworkAxeNpcRight = document.getElementById("fireworkAxeNpcRight");
const $fireworkBowNpcRight = document.getElementById("fireworkBowNpcRight");
const $fireworkSwordNpcRight = document.getElementById("fireworkSwordNpcRight");
const $fireworkAxeShimmerNpcFullLeft = document.getElementById("fireworkAxeShimmerNpcFullLeft");
const $fireworkBowShimmerNpcFullLeft = document.getElementById("fireworkBowShimmerNpcFullLeft");
const $fireworkSwordShimmerNpcFullLeft = document.getElementById("fireworkSwordShimmerNpcFullLeft");
const $fireworkAxeShimmerNpcFullRight = document.getElementById("fireworkAxeShimmerNpcFullRight");
const $fireworkBowShimmerNpcFullRight = document.getElementById("fireworkBowShimmerNpcFullRight");
const $fireworkSwordShimmerNpcFullRight = document.getElementById("fireworkSwordShimmerNpcFullRight");
const $bottomFirework_5NpcLeft = document.getElementById("bottomFirework_5NpcLeft");
const $bottomFirework_5NpcRight = document.getElementById("bottomFirework_5NpcRight");
const $middleFirework_6NpcLeft = document.getElementById("middleFirework_6NpcLeft");
const $middleFirework_6NpcRight = document.getElementById("middleFirework_6NpcRight");
const $topFirework_7NpcLeft = document.getElementById("topFirework_7NpcLeft");
const $topFirework_7NpcRight = document.getElementById("topFirework_7NpcRight");
const $bottomFirework_5Z_3NpcLeft = document.getElementById("bottomFirework_5Z_3NpcLeft");
const $bottomFirework_5Z_3NpcRight = document.getElementById("bottomFirework_5Z_3NpcRight");
const $middleFirework_6Z_2NpcLeft = document.getElementById("middleFirework_6Z_2NpcLeft");
const $middleFirework_6Z_2NpcRight = document.getElementById("middleFirework_6Z_2NpcRight");
const $topFirework_7Z_1NpcLeft = document.getElementById("topFirework_7Z_1NpcLeft");
const $topFirework_7Z_1NpcRight = document.getElementById("topFirework_7Z_1NpcRight");
const $axeFireworkExplosionNpcDefendedLeft = document.getElementById("axeFireworkExplosionNpcDefendedLeft");
const $axeFireworkExplosionNpcDefendedRight = document.getElementById("axeFireworkExplosionNpcDefendedRight");
const $axeSmokeNpcFullMinus9DefendedLeft = document.getElementById("axeSmokeNpcFullMinus9DefendedLeft");
const $axeSmokeNpcFullMinus8DefendedLeft = document.getElementById("axeSmokeNpcFullMinus8DefendedLeft");
const $axeSmokeNpcFullMinus7DefendedLeft = document.getElementById("axeSmokeNpcFullMinus7DefendedLeft");
const $axeSmokeNpcFullMinus6DefendedLeft = document.getElementById("axeSmokeNpcFullMinus6DefendedLeft");
const $axeSmokeNpcFullMinus5DefendedLeft = document.getElementById("axeSmokeNpcFullMinus5DefendedLeft");
const $axeSmokeNpcFullMinus4DefendedLeft = document.getElementById("axeSmokeNpcFullMinus4DefendedLeft");
const $axeSmokeNpcFullMinus3DefendedLeft = document.getElementById("axeSmokeNpcFullMinus3DefendedLeft");
const $axeSmokeNpcFullMinus2DefendedLeft = document.getElementById("axeSmokeNpcFullMinus2DefendedLeft");
const $axeSmokeNpcFullMinus1DefendedLeft = document.getElementById("axeSmokeNpcFullMinus1DefendedLeft");
const $axeSmokeNpcFullDefendedLeft = document.getElementById("axeSmokeNpcFullDefendedLeft");
const $axeSmokeNpcFullMinus9DefendedRight = document.getElementById("axeSmokeNpcFullMinus9DefendedRight");
const $axeSmokeNpcFullMinus8DefendedRight = document.getElementById("axeSmokeNpcFullMinus8DefendedRight");
const $axeSmokeNpcFullMinus7DefendedRight = document.getElementById("axeSmokeNpcFullMinus7DefendedRight");
const $axeSmokeNpcFullMinus6DefendedRight = document.getElementById("axeSmokeNpcFullMinus6DefendedRight");
const $axeSmokeNpcFullMinus5DefendedRight = document.getElementById("axeSmokeNpcFullMinus5DefendedRight");
const $axeSmokeNpcFullMinus4DefendedRight = document.getElementById("axeSmokeNpcFullMinus4DefendedRight");
const $axeSmokeNpcFullMinus3DefendedRight = document.getElementById("axeSmokeNpcFullMinus3DefendedRight");
const $axeSmokeNpcFullMinus2DefendedRight = document.getElementById("axeSmokeNpcFullMinus2DefendedRight");
const $axeSmokeNpcFullMinus1DefendedRight = document.getElementById("axeSmokeNpcFullMinus1DefendedRight");
const $axeSmokeNpcFullDefendedRight = document.getElementById("axeSmokeNpcFullDefendedRight");
const $bowFireworkExplosionNpcDefendedLeft = document.getElementById("bowFireworkExplosionNpcDefendedLeft");
const $bowFireworkExplosionNpcDefendedRight = document.getElementById("bowFireworkExplosionNpcDefendedRight");
const $bowSmokeNpcFullMinus9DefendedLeft = document.getElementById("bowSmokeNpcFullMinus9DefendedLeft");
const $bowSmokeNpcFullMinus8DefendedLeft = document.getElementById("bowSmokeNpcFullMinus8DefendedLeft");
const $bowSmokeNpcFullMinus7DefendedLeft = document.getElementById("bowSmokeNpcFullMinus7DefendedLeft");
const $bowSmokeNpcFullMinus6DefendedLeft = document.getElementById("bowSmokeNpcFullMinus6DefendedLeft");
const $bowSmokeNpcFullMinus5DefendedLeft = document.getElementById("bowSmokeNpcFullMinus5DefendedLeft");
const $bowSmokeNpcFullMinus4DefendedLeft = document.getElementById("bowSmokeNpcFullMinus4DefendedLeft");
const $bowSmokeNpcFullMinus3DefendedLeft = document.getElementById("bowSmokeNpcFullMinus3DefendedLeft");
const $bowSmokeNpcFullMinus2DefendedLeft = document.getElementById("bowSmokeNpcFullMinus2DefendedLeft");
const $bowSmokeNpcFullMinus1DefendedLeft = document.getElementById("bowSmokeNpcFullMinus1DefendedLeft");
const $bowSmokeNpcFullDefendedLeft = document.getElementById("bowSmokeNpcFullDefendedLeft");
const $bowSmokeNpcFullMinus9DefendedRight = document.getElementById("bowSmokeNpcFullMinus9DefendedRight");
const $bowSmokeNpcFullMinus8DefendedRight = document.getElementById("bowSmokeNpcFullMinus8DefendedRight");
const $bowSmokeNpcFullMinus7DefendedRight = document.getElementById("bowSmokeNpcFullMinus7DefendedRight");
const $bowSmokeNpcFullMinus6DefendedRight = document.getElementById("bowSmokeNpcFullMinus6DefendedRight");
const $bowSmokeNpcFullMinus5DefendedRight = document.getElementById("bowSmokeNpcFullMinus5DefendedRight");
const $bowSmokeNpcFullMinus4DefendedRight = document.getElementById("bowSmokeNpcFullMinus4DefendedRight");
const $bowSmokeNpcFullMinus3DefendedRight = document.getElementById("bowSmokeNpcFullMinus3DefendedRight");
const $bowSmokeNpcFullMinus2DefendedRight = document.getElementById("bowSmokeNpcFullMinus2DefendedRight");
const $bowSmokeNpcFullMinus1DefendedRight = document.getElementById("bowSmokeNpcFullMinus1DefendedRight");
const $bowSmokeNpcFullDefendedRight = document.getElementById("bowSmokeNpcFullDefendedRight");
const $swordFireworkExplosionNpcDefendedLeft = document.getElementById("swordFireworkExplosionNpcDefendedLeft");
const $swordFireworkExplosionNpcDefendedRight = document.getElementById("swordFireworkExplosionNpcDefendedRight");
const $swordSmokeNpcFullMinus9DefendedLeft = document.getElementById("swordSmokeNpcFullMinus9DefendedLeft");
const $swordSmokeNpcFullMinus8DefendedLeft = document.getElementById("swordSmokeNpcFullMinus8DefendedLeft");
const $swordSmokeNpcFullMinus7DefendedLeft = document.getElementById("swordSmokeNpcFullMinus7DefendedLeft");
const $swordSmokeNpcFullMinus6DefendedLeft = document.getElementById("swordSmokeNpcFullMinus6DefendedLeft");
const $swordSmokeNpcFullMinus5DefendedLeft = document.getElementById("swordSmokeNpcFullMinus5DefendedLeft");
const $swordSmokeNpcFullMinus4DefendedLeft = document.getElementById("swordSmokeNpcFullMinus4DefendedLeft");
const $swordSmokeNpcFullMinus3DefendedLeft = document.getElementById("swordSmokeNpcFullMinus3DefendedLeft");
const $swordSmokeNpcFullMinus2DefendedLeft = document.getElementById("swordSmokeNpcFullMinus2DefendedLeft");
const $swordSmokeNpcFullMinus1DefendedLeft = document.getElementById("swordSmokeNpcFullMinus1DefendedLeft");
const $swordSmokeNpcFullDefendedLeft = document.getElementById("swordSmokeNpcFullDefendedLeft");
const $swordSmokeNpcFullMinus9DefendedRight = document.getElementById("swordSmokeNpcFullMinus9DefendedRight");
const $swordSmokeNpcFullMinus8DefendedRight = document.getElementById("swordSmokeNpcFullMinus8DefendedRight");
const $swordSmokeNpcFullMinus7DefendedRight = document.getElementById("swordSmokeNpcFullMinus7DefendedRight");
const $swordSmokeNpcFullMinus6DefendedRight = document.getElementById("swordSmokeNpcFullMinus6DefendedRight");
const $swordSmokeNpcFullMinus5DefendedRight = document.getElementById("swordSmokeNpcFullMinus5DefendedRight");
const $swordSmokeNpcFullMinus4DefendedRight = document.getElementById("swordSmokeNpcFullMinus4DefendedRight");
const $swordSmokeNpcFullMinus3DefendedRight = document.getElementById("swordSmokeNpcFullMinus3DefendedRight");
const $swordSmokeNpcFullMinus2DefendedRight = document.getElementById("swordSmokeNpcFullMinus2DefendedRight");
const $swordSmokeNpcFullMinus1DefendedRight = document.getElementById("swordSmokeNpcFullMinus1DefendedRight");
const $swordSmokeNpcFullDefendedRight = document.getElementById("swordSmokeNpcFullDefendedRight");
const $axeBowFireworkExplosionNpcDefendedLeft = document.getElementById("axeBowFireworkExplosionNpcDefendedLeft");
const $axeBowFireworkExplosionNpcDefendedRight = document.getElementById("axeBowFireworkExplosionNpcDefendedRight");
const $axeBowSmokeNpcFullMinus9DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus9DefendedLeft");
const $axeBowSmokeNpcFullMinus8DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus8DefendedLeft");
const $axeBowSmokeNpcFullMinus7DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus7DefendedLeft");
const $axeBowSmokeNpcFullMinus6DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus6DefendedLeft");
const $axeBowSmokeNpcFullMinus5DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus5DefendedLeft");
const $axeBowSmokeNpcFullMinus4DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus4DefendedLeft");
const $axeBowSmokeNpcFullMinus3DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus3DefendedLeft");
const $axeBowSmokeNpcFullMinus2DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus2DefendedLeft");
const $axeBowSmokeNpcFullMinus1DefendedLeft = document.getElementById("axeBowSmokeNpcFullMinus1DefendedLeft");
const $axeBowSmokeNpcFullDefendedLeft = document.getElementById("axeBowSmokeNpcFullDefendedLeft");
const $axeBowSmokeNpcFullMinus9DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus9DefendedRight");
const $axeBowSmokeNpcFullMinus8DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus8DefendedRight");
const $axeBowSmokeNpcFullMinus7DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus7DefendedRight");
const $axeBowSmokeNpcFullMinus6DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus6DefendedRight");
const $axeBowSmokeNpcFullMinus5DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus5DefendedRight");
const $axeBowSmokeNpcFullMinus4DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus4DefendedRight");
const $axeBowSmokeNpcFullMinus3DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus3DefendedRight");
const $axeBowSmokeNpcFullMinus2DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus2DefendedRight");
const $axeBowSmokeNpcFullMinus1DefendedRight = document.getElementById("axeBowSmokeNpcFullMinus1DefendedRight");
const $axeBowSmokeNpcFullDefendedRight = document.getElementById("axeBowSmokeNpcFullDefendedRight");
const $axeSwordFireworkExplosionNpcDefendedLeft = document.getElementById("axeSwordFireworkExplosionNpcDefendedLeft");
const $axeSwordFireworkExplosionNpcDefendedRight = document.getElementById("axeSwordFireworkExplosionNpcDefendedRight");
const $axeSwordSmokeNpcFullMinus9DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus9DefendedLeft");
const $axeSwordSmokeNpcFullMinus8DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus8DefendedLeft");
const $axeSwordSmokeNpcFullMinus7DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus7DefendedLeft");
const $axeSwordSmokeNpcFullMinus6DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus6DefendedLeft");
const $axeSwordSmokeNpcFullMinus5DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus5DefendedLeft");
const $axeSwordSmokeNpcFullMinus4DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus4DefendedLeft");
const $axeSwordSmokeNpcFullMinus3DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus3DefendedLeft");
const $axeSwordSmokeNpcFullMinus2DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus2DefendedLeft");
const $axeSwordSmokeNpcFullMinus1DefendedLeft = document.getElementById("axeSwordSmokeNpcFullMinus1DefendedLeft");
const $axeSwordSmokeNpcFullDefendedLeft = document.getElementById("axeSwordSmokeNpcFullDefendedLeft");
const $axeSwordSmokeNpcFullMinus9DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus9DefendedRight");
const $axeSwordSmokeNpcFullMinus8DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus8DefendedRight");
const $axeSwordSmokeNpcFullMinus7DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus7DefendedRight");
const $axeSwordSmokeNpcFullMinus6DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus6DefendedRight");
const $axeSwordSmokeNpcFullMinus5DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus5DefendedRight");
const $axeSwordSmokeNpcFullMinus4DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus4DefendedRight");
const $axeSwordSmokeNpcFullMinus3DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus3DefendedRight");
const $axeSwordSmokeNpcFullMinus2DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus2DefendedRight");
const $axeSwordSmokeNpcFullMinus1DefendedRight = document.getElementById("axeSwordSmokeNpcFullMinus1DefendedRight");
const $axeSwordSmokeNpcFullDefendedRight = document.getElementById("axeSwordSmokeNpcFullDefendedRight");
const $bowSwordFireworkExplosionNpcDefendedLeft = document.getElementById("bowSwordFireworkExplosionNpcDefendedLeft");
const $bowSwordFireworkExplosionNpcDefendedRight = document.getElementById("bowSwordFireworkExplosionNpcDefendedRight");
const $bowSwordSmokeNpcFullMinus9DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus9DefendedLeft");
const $bowSwordSmokeNpcFullMinus8DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus8DefendedLeft");
const $bowSwordSmokeNpcFullMinus7DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus7DefendedLeft");
const $bowSwordSmokeNpcFullMinus6DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus6DefendedLeft");
const $bowSwordSmokeNpcFullMinus5DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus5DefendedLeft");
const $bowSwordSmokeNpcFullMinus4DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus4DefendedLeft");
const $bowSwordSmokeNpcFullMinus3DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus3DefendedLeft");
const $bowSwordSmokeNpcFullMinus2DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus2DefendedLeft");
const $bowSwordSmokeNpcFullMinus1DefendedLeft = document.getElementById("bowSwordSmokeNpcFullMinus1DefendedLeft");
const $bowSwordSmokeNpcFullDefendedLeft = document.getElementById("bowSwordSmokeNpcFullDefendedLeft");
const $bowSwordSmokeNpcFullMinus9DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus9DefendedRight");
const $bowSwordSmokeNpcFullMinus8DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus8DefendedRight");
const $bowSwordSmokeNpcFullMinus7DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus7DefendedRight");
const $bowSwordSmokeNpcFullMinus6DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus6DefendedRight");
const $bowSwordSmokeNpcFullMinus5DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus5DefendedRight");
const $bowSwordSmokeNpcFullMinus4DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus4DefendedRight");
const $bowSwordSmokeNpcFullMinus3DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus3DefendedRight");
const $bowSwordSmokeNpcFullMinus2DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus2DefendedRight");
const $bowSwordSmokeNpcFullMinus1DefendedRight = document.getElementById("bowSwordSmokeNpcFullMinus1DefendedRight");
const $bowSwordSmokeNpcFullDefendedRight = document.getElementById("bowSwordSmokeNpcFullDefendedRight");
const $axeBowSwordFireworkExplosionNpcDefendedLeft = document.getElementById("axeBowSwordFireworkExplosionNpcDefendedLeft");
const $axeBowSwordFireworkExplosionNpcDefendedRight = document.getElementById("axeBowSwordFireworkExplosionNpcDefendedRight");
const $axeBowSwordSmokeNpcFullMinus9DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus9DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus8DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus8DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus7DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus7DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus6DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus6DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus5DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus5DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus4DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus4DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus3DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus3DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus2DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus2DefendedLeft");
const $axeBowSwordSmokeNpcFullMinus1DefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullMinus1DefendedLeft");
const $axeBowSwordSmokeNpcFullDefendedLeft = document.getElementById("axeBowSwordSmokeNpcFullDefendedLeft");
const $axeBowSwordSmokeNpcFullMinus9DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus9DefendedRight");
const $axeBowSwordSmokeNpcFullMinus8DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus8DefendedRight");
const $axeBowSwordSmokeNpcFullMinus7DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus7DefendedRight");
const $axeBowSwordSmokeNpcFullMinus6DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus6DefendedRight");
const $axeBowSwordSmokeNpcFullMinus5DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus5DefendedRight");
const $axeBowSwordSmokeNpcFullMinus4DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus4DefendedRight");
const $axeBowSwordSmokeNpcFullMinus3DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus3DefendedRight");
const $axeBowSwordSmokeNpcFullMinus2DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus2DefendedRight");
const $axeBowSwordSmokeNpcFullMinus1DefendedRight = document.getElementById("axeBowSwordSmokeNpcFullMinus1DefendedRight");
const $axeBowSwordSmokeNpcFullDefendedRight = document.getElementById("axeBowSwordSmokeNpcFullDefendedRight");
const $fireworkAxeNpcDefendedLeft = document.getElementById("fireworkAxeNpcDefendedLeft");
const $fireworkBowNpcDefendedLeft = document.getElementById("fireworkBowNpcDefendedLeft");
const $fireworkSwordNpcDefendedLeft = document.getElementById("fireworkSwordNpcDefendedLeft");
const $fireworkAxeNpcDefendedRight = document.getElementById("fireworkAxeNpcDefendedRight");
const $fireworkBowNpcDefendedRight = document.getElementById("fireworkBowNpcDefendedRight");
const $fireworkSwordNpcDefendedRight = document.getElementById("fireworkSwordNpcDefendedRight");
const $fireworkAxeShimmerNpcFullDefendedLeft = document.getElementById("fireworkAxeShimmerNpcFullDefendedLeft");
const $fireworkBowShimmerNpcFullDefendedLeft = document.getElementById("fireworkBowShimmerNpcFullDefendedLeft");
const $fireworkSwordShimmerNpcFullDefendedLeft = document.getElementById("fireworkSwordShimmerNpcFullDefendedLeft");
const $fireworkAxeShimmerNpcFullDefendedRight = document.getElementById("fireworkAxeShimmerNpcFullDefendedRight");
const $fireworkBowShimmerNpcFullDefendedRight = document.getElementById("fireworkBowShimmerNpcFullDefendedRight");
const $fireworkSwordShimmerNpcFullDefendedRight = document.getElementById("fireworkSwordShimmerNpcFullDefendedRight");

//pc redWiz

const $redWizPcDefendLeft = document.getElementById("redWizPcDefendLeft");
const $redWizPcDefendRight = document.getElementById("redWizPcDefendRight");
const $redWizPc = document.getElementById("redWizPc");
const $redWizPcStruckLeft = document.getElementById("redWizPcStruckLeft");
const $redWizPcStruckRight = document.getElementById("redWizPcStruckRight");

//npc redWiz

const $redWizNpcDefendLeft = document.getElementById("redWizNpcDefendLeft");
const $redWizNpcDefendRight = document.getElementById("redWizNpcDefendRight");
const $redWizNpc = document.getElementById("redWizNpc");
const $redWizNpcStruckLeft = document.getElementById("redWizNpcStruckLeft");
const $redWizNpcStruckRight = document.getElementById("redWizNpcStruckRight");

var init = () => {
    $whiteBackground.setAttribute("class", "visible")    
}

//Initial Character Setup And Final Removal

var setSceneWithBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBluePc = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
    $blueWizPcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "visible")
}

var cleanSceneOfBlueNpc = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $blueWizNpcWithoutArmsOrArchimedes.setAttribute("class", "hidden")
}

var setSceneWithGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "visible")    
}

var cleanSceneOfGreyPc = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithGreyNpc = () => {   
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
}

var cleanSceneOfGreyNpc = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
}

var setSceneWithRedPc = () => {
    $redWizPc.setAttribute("class", "visible")    
}

var cleanSceneOfRedPc = () => {
    $redWizPc.setAttribute("class", "hidden")    
}

var setSceneWithRedNpc = () => {
    $redWizNpc.setAttribute("class", "visible")
}

var cleanSceneOfRedNpc = () => {
    $redWizNpc.setAttribute("class", "hidden")
}

//pc blueWiz

var blueWizPcDefendsLeft = () => {
    $blueWizArmPcDefendLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcDefendsRight = () => {
    $blueWizArmPcDefendRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcAttacksLeft = () => {
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizPcAttacksRight = () => {
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var blueWizPcClenchsLeft = () => {
    $blueWizArmPcClenchLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")    
}

var blueWizPcClenchsRight = () => {
    $blueWizArmPcClenchRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden")    
}

var blueWizPcRestsArmLeft = () => {
    $blueWizArmPcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "hidden")  
    $blueWizArmPcDefendLeft.setAttribute("class", "hidden")   
}

var blueWizPcRestsArmRight = () => {
    $blueWizArmPcDefaultRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "hidden") 
    $blueWizArmPcDefendRight.setAttribute("class", "hidden")    
}

var magicMissileFiresPcLeft = () => {
    $magicMissile_0PcLeft.setAttribute("class", "visible")
    $blueWizArmPcAttackLeft.setAttribute("class", "visible")
    $blueWizArmPcClenchLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcLeft.setAttribute("class", "hidden")
}

var magicMissileFiresPcRight = () => {
    $magicMissile_0PcRight.setAttribute("class", "visible")
    $blueWizArmPcAttackRight.setAttribute("class", "visible")
    $blueWizArmPcClenchRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5PcRight.setAttribute("class", "hidden")
}

var magicMissileFires2PcLeft = () => {
    $magicMissile_1PcLeft.setAttribute("class", "visible")
    $magicMissile_0PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2PcRight = () => {
    $magicMissile_1PcRight.setAttribute("class", "visible")
    $magicMissile_0PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3PcLeft = () => {
    $magicMissile_2PcLeft.setAttribute("class", "visible")
    $magicMissile_1PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3PcRight = () => {
    $magicMissile_2PcRight.setAttribute("class", "visible")
    $magicMissile_1PcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4PcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "visible")
    $magicMissile_2PcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4PcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "visible")
    $magicMissile_2PcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesPcLeft = () => {
    $magicMissileCondensation_0PcLeft.setAttribute("class", "visible")
    $star_4PcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesPcRight = () => {
    $magicMissileCondensation_0PcRight.setAttribute("class", "visible")
    $star_4PcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2PcLeft = () => {
    $magicMissileCondensation_1PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2PcRight = () => {
    $magicMissileCondensation_1PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcLeft = () => {
    $magicMissileCondensation_2PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3PcRight = () => {
    $magicMissileCondensation_2PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcLeft = () => {
    $magicMissileCondensation_3PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4PcRight = () => {
    $magicMissileCondensation_3PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcLeft = () => {
    $magicMissileCondensation_4PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5PcRight = () => {
    $magicMissileCondensation_4PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3PcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcLeft = () => {
    $magicMissileCondensation_5PcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4PcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6PcRight = () => {
    $magicMissileCondensation_5PcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4PcRight.setAttribute("class", "hidden")        
}

var magicMissilePcDeflectedLeft = () => {
    $magicMissilePcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3PcLeft.setAttribute("class", "hidden")
}

var magicMissilePcDeflectedRight = () => {
    $magicMissilePcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3PcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "visible")
    $magicMissilePcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesPcDeflectedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "visible")
    $magicMissilePcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedLeft = () => {
    $magicMissileSplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcDefendedRight = () => {
    $magicMissileSplosionPcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesPcLeft = () => {
    $magicMissile_3PcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionPcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesPcRight = () => {
    $magicMissile_3PcRight.setAttribute("class", "hidden")
    $magicMissileSplosionPcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesPcLeft = () => {
    $magicMissileSplosionPcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesPcRight = () => {
    $magicMissileSplosionPcRight.setAttribute("class", "hidden")
}

var starFormsPcLeft = () => {
    $star_0PcLeft.setAttribute("class", "visible")
}

var starFormsPcRight = () => {
    $star_0PcRight.setAttribute("class", "visible")
}

var starForms2PcLeft = () => {
    $star_1PcLeft.setAttribute("class", "visible")
    $star_0PcLeft.setAttribute("class", "hidden")
}

var starForms2PcRight = () => {
    $star_1PcRight.setAttribute("class", "visible")
    $star_0PcRight.setAttribute("class", "hidden")
}

var starForms3PcLeft = () => {
    $star_2PcLeft.setAttribute("class", "visible")
    $star_1PcLeft.setAttribute("class", "hidden")
}

var starForms3PcRight = () => {
    $star_2PcRight.setAttribute("class", "visible")
    $star_1PcRight.setAttribute("class", "hidden")
}

var starForms4PcLeft = () => {
    $star_3PcLeft.setAttribute("class", "visible")
    $star_2PcLeft.setAttribute("class", "hidden")
}

var starForms4PcRight = () => {
    $star_3PcRight.setAttribute("class", "visible")
    $star_2PcRight.setAttribute("class", "hidden")
}

var starForms5PcLeft = () => {
    $star_4PcLeft.setAttribute("class", "visible")
    $star_3PcLeft.setAttribute("class", "hidden")
}

var starForms5PcRight = () => {
    $star_4PcRight.setAttribute("class", "visible")
    $star_3PcRight.setAttribute("class", "hidden")
}

//npc blueWiz

var blueWizNpcDefendsLeft = () => {
    $blueWizArmNpcDefendLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var blueWizNpcDefendsRight = () => {
    $blueWizArmNpcDefendRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var blueWizNpcAttacksLeft = () => {
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var blueWizNpcAttacksRight = () => {
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var blueWizNpcClenchsLeft = () => {
    $blueWizArmNpcClenchLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "hidden")
}

var blueWizNpcClenchsRight = () => {
    $blueWizArmNpcClenchRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $magicMissileCondensation_5NpcRight.setAttribute("class", "hidden")    
}

var blueWizNpcRestsArmLeft = () => {
    $blueWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "hidden")
    $blueWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var blueWizNpcRestsArmRight = () => {
    $blueWizArmNpcDefaultRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "hidden")
    $blueWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var magicMissileFiresNpcLeft = () => {
    $magicMissile_0NpcLeft.setAttribute("class", "visible")
    $blueWizArmNpcAttackLeft.setAttribute("class", "visible")
    $blueWizArmNpcClenchLeft.setAttribute("class", "hidden")
}

var magicMissileFiresNpcRight = () => {
    $magicMissile_0NpcRight.setAttribute("class", "visible")
    $blueWizArmNpcAttackRight.setAttribute("class", "visible")
    $blueWizArmNpcClenchRight.setAttribute("class", "hidden")
}

var magicMissileFires2NpcLeft = () => {
    $magicMissile_1NpcLeft.setAttribute("class", "visible")
    $magicMissile_0NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires2NpcRight = () => {
    $magicMissile_1NpcRight.setAttribute("class", "visible")
    $magicMissile_0NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcLeft = () => {
    $magicMissile_2NpcLeft.setAttribute("class", "visible")
    $magicMissile_1NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires3NpcRight = () => {
    $magicMissile_2NpcRight.setAttribute("class", "visible")
    $magicMissile_1NpcRight.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "visible")
    $magicMissile_2NpcLeft.setAttribute("class", "hidden")    
}

var magicMissileFires4NpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "visible")
    $magicMissile_2NpcRight.setAttribute("class", "hidden")    
}

var magicMissileCondensesNpcLeft = () => {
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "visible")
    $star_4NpcLeft.setAttribute("class", "hidden")
}

var magicMissileCondensesNpcRight = () => {
    $magicMissileCondensation_0NpcRight.setAttribute("class", "visible")
    $star_4NpcRight.setAttribute("class", "hidden")
}

var magicMissileCondenses2NpcLeft = () => {
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses2NpcRight = () => {
    $magicMissileCondensation_1NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_0NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcLeft = () => {
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses3NpcRight = () => {
    $magicMissileCondensation_2NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_1NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcLeft = () => {
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses4NpcRight = () => {
    $magicMissileCondensation_3NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_2NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcLeft = () => {
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses5NpcRight = () => {
    $magicMissileCondensation_4NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_3NpcRight.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcLeft = () => {
    $magicMissileCondensation_5NpcLeft.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcLeft.setAttribute("class", "hidden")        
}

var magicMissileCondenses6NpcRight = () => {
    $magicMissileCondensation_5NpcRight.setAttribute("class", "visible")
    $magicMissileCondensation_4NpcRight.setAttribute("class", "hidden")        
}

var magicMissileNpcDeflectedLeft = () => {
    $magicMissileNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")
}

var magicMissileNpcDeflectedRight = () => {
    $magicMissileNpcDefendedRight.setAttribute("class", "visible")
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "visible")
    $magicMissileNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcDeflectedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "visible")
    $magicMissileNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedLeft = () => {
    $magicMissileSplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcDefendedRight = () => {
    $magicMissileSplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var magicMissileExplodesNpcLeft = () => {
    $magicMissile_3NpcLeft.setAttribute("class", "hidden")    
    $magicMissileSplosionNpcLeft.setAttribute("class", "visible")    
}

var magicMissileExplodesNpcRight = () => {
    $magicMissile_3NpcRight.setAttribute("class", "hidden")
    $magicMissileSplosionNpcRight.setAttribute("class", "visible")    
}

var magicMissileExplosionDissipatesNpcLeft = () => {
    $magicMissileSplosionNpcLeft.setAttribute("class", "hidden")
}

var magicMissileExplosionDissipatesNpcRight = () => {
    $magicMissileSplosionNpcRight.setAttribute("class", "hidden")
}

var starFormsNpcLeft = () => {
    $star_0NpcLeft.setAttribute("class", "visible")
}

var starFormsNpcRight = () => {
    $star_0NpcRight.setAttribute("class", "visible")
}

var starForms2NpcLeft = () => {
    $star_1NpcLeft.setAttribute("class", "visible")
    $star_0NpcLeft.setAttribute("class", "hidden")
}

var starForms2NpcRight = () => {
    $star_1NpcRight.setAttribute("class", "visible")
    $star_0NpcRight.setAttribute("class", "hidden")
}

var starForms3NpcLeft = () => {
    $star_2NpcLeft.setAttribute("class", "visible")
    $star_1NpcLeft.setAttribute("class", "hidden")
}

var starForms3NpcRight = () => {
    $star_2NpcRight.setAttribute("class", "visible")
    $star_1NpcRight.setAttribute("class", "hidden")
}

var starForms4NpcLeft = () => {
    $star_3NpcLeft.setAttribute("class", "visible")
    $star_2NpcLeft.setAttribute("class", "hidden")
}

var starForms4NpcRight = () => {
    $star_3NpcRight.setAttribute("class", "visible")
    $star_2NpcRight.setAttribute("class", "hidden")
}

var starForms5NpcLeft = () => {
    $star_4NpcLeft.setAttribute("class", "visible")
    $star_3NpcLeft.setAttribute("class", "hidden")
}

var starForms5NpcRight = () => {
    $star_4NpcRight.setAttribute("class", "visible")
    $star_3NpcRight.setAttribute("class", "hidden")
}

//pc greyWiz

var greyWizPcDefendsLeft = () => {
    $greyWizArmPcDefendLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizPcDefendsRight = () => {
    $greyWizArmPcDefendRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizPcRestsArmLeft = () => {
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizPcRestsArmRight = () => {
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")     
}

var greyWizPcStruckLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefendRight.setAttribute("class", "hidden")    
    $greyWizPcStruckLeft.setAttribute("class", "visible")
}

var greyWizPcStruckRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefendLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizPcStruckRight.setAttribute("class", "visible")
}

var greyWizPcRegainsComposureLeft = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")    
    $greyWizPcStruckLeft.setAttribute("class", "hidden")
}

var greyWizPcRegainsComposureRight = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcStruckRight.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_0Left = () => {
    $greyWizPcWithoutHands.setAttribute("class", "visible")
    $greyWizHandPc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_1Left = () => {
    $greyWizHandPc30DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandPc15DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_2Left = () => {
    $greyWizHandPc45DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandPc30DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_0Right = () => {
    $greyWizPcWithoutHands.setAttribute("class", "visible")
    $greyWizHandPc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandPcDefaultLeft.setAttribute("class", "visible")
    $greyWizPcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmPcDefaultRight.setAttribute("class", "hidden")
    $greyWizArmPcDefaultLeft.setAttribute("class", "hidden")
}

var greyWizArmPcRotationForAttack_1Right = () => {
    $greyWizHandPc330DegreesRight.setAttribute("class", "visible")    
    $greyWizHandPc345DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationForAttack_2Right = () => {
    $greyWizHandPc315DegreesRight.setAttribute("class", "visible")    
    $greyWizHandPc330DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_0Left = () => {        
    $greyWizHandPc30DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPc45DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_1Left = () => {
    $greyWizHandPc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandPc30DegreesLeft.setAttribute("class", "hidden")        
}

var greyWizArmPcRotationBackFromAttack_2Left = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizPcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandPc15DegreesLeft.setAttribute("class", "hidden")
    $greyWizHandPcDefaultRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_0Right = () => {        
    $greyWizHandPc330DegreesRight.setAttribute("class", "visible")
    $greyWizHandPc315DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmPcRotationBackFromAttack_1Right = () => {
    $greyWizHandPc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandPc330DegreesRight.setAttribute("class", "hidden")        
}

var greyWizArmPcRotationBackFromAttack_2Right = () => {
    $greyWizPcWithoutArms.setAttribute("class", "visible")
    $greyWizArmPcDefaultRight.setAttribute("class", "visible")
    $greyWizArmPcDefaultLeft.setAttribute("class", "visible")
    $greyWizPcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandPc345DegreesRight.setAttribute("class", "hidden")
    $greyWizHandPcDefaultLeft.setAttribute("class", "hidden")    
}

// axe Scenario Pc

var axeProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12PcLeft = () => {
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeFireworkExplodesPcLeft = () => {
    $axeFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0PcLeft = () => {
    $axeSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcLeft = () => {
    $axeSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcLeft = () => {
    $axeSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcLeft = () => {
    $axeSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcLeft = () => {
    $axeSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcLeft = () => {
    $axeSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcLeft = () => {
    $axeSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcLeft = () => {
    $axeSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcLeft = () => {
    $axeSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcLeft = () => {
    $axeSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcLeft = () => {
    $axeSmokePcFullLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $axeSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12PcRight = () => {
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesPcRight = () => {
    $axeFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0PcRight = () => {
    $axeSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcRight = () => {
    $axeSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcRight = () => {
    $axeSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcRight = () => {
    $axeSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcRight = () => {
    $axeSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcRight = () => {
    $axeSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcRight = () => {
    $axeSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcRight = () => {
    $axeSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcRight = () => {
    $axeSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcRight = () => {
    $axeSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcRight = () => {
    $axeSmokePcFullRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $axeSmokePcFullRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "visible")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesPcDefendedLeft = () => {
    $axeFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var axeFireworkDisplays_0PcDefendedLeft = () => {
    $axeSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcDefendedLeft = () => {
    $axeSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcDefendedLeft = () => {
    $axeSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcDefendedLeft = () => {
    $axeSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcDefendedLeft = () => {
    $axeSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcDefendedLeft = () => {
    $axeSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcDefendedLeft = () => {
    $axeSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcDefendedLeft = () => {
    $axeSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcDefendedLeft = () => {
    $axeSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcDefendedLeft = () => {
    $axeSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $axeSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "visible")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesPcDefendedRight = () => {
    $axeFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var axeFireworkDisplays_0PcDefendedRight = () => {
    $axeSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1PcDefendedRight = () => {
    $axeSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2PcDefendedRight = () => {
    $axeSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3PcDefendedRight = () => {
    $axeSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4PcDefendedRight = () => {
    $axeSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5PcDefendedRight = () => {
    $axeSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6PcDefendedRight = () => {
    $axeSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7PcDefendedRight = () => {
    $axeSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8PcDefendedRight = () => {
    $axeSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9PcDefendedRight = () => {
    $axeSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $axeSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "visible")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $axeSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// bow Scenario Pc

var bowProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var bowFireworkExplodesPcLeft = () => {
    $bowFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0PcLeft = () => {
    $bowSmokePcFullMinus10Left.setAttribute("class", "visible")
    $bowFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcLeft = () => {
    $bowSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcLeft = () => {
    $bowSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcLeft = () => {
    $bowSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcLeft = () => {
    $bowSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcLeft = () => {
    $bowSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcLeft = () => {
    $bowSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcLeft = () => {
    $bowSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcLeft = () => {
    $bowSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcLeft = () => {
    $bowSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcLeft = () => {
    $bowSmokePcFullLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $bowSmokePcFullLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesPcRight = () => {
    $bowFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0PcRight = () => {
    $bowSmokePcFullMinus10Right.setAttribute("class", "visible")
    $bowFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcRight = () => {
    $bowSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcRight = () => {
    $bowSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcRight = () => {
    $bowSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcRight = () => {
    $bowSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcRight = () => {
    $bowSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcRight = () => {
    $bowSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcRight = () => {
    $bowSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcRight = () => {
    $bowSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcRight = () => {
    $bowSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcRight = () => {
    $bowSmokePcFullRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $bowSmokePcFullRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var bowProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "visible")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesPcDefendedLeft = () => {
    $bowFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var bowFireworkDisplays_0PcDefendedLeft = () => {
    $bowSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $bowFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcDefendedLeft = () => {
    $bowSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcDefendedLeft = () => {
    $bowSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcDefendedLeft = () => {
    $bowSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcDefendedLeft = () => {
    $bowSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcDefendedLeft = () => {
    $bowSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcDefendedLeft = () => {
    $bowSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcDefendedLeft = () => {
    $bowSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcDefendedLeft = () => {
    $bowSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcDefendedLeft = () => {
    $bowSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $bowSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "visible")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "visible")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesPcDefendedRight = () => {
    $bowFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var bowFireworkDisplays_0PcDefendedRight = () => {
    $bowSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $bowFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1PcDefendedRight = () => {
    $bowSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2PcDefendedRight = () => {
    $bowSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3PcDefendedRight = () => {
    $bowSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4PcDefendedRight = () => {
    $bowSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5PcDefendedRight = () => {
    $bowSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6PcDefendedRight = () => {
    $bowSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7PcDefendedRight = () => {
    $bowSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8PcDefendedRight = () => {
    $bowSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9PcDefendedRight = () => {
    $bowSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $bowSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $bowSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// sword Scenario Pc

var swordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var swordFireworkExplodesPcLeft = () => {
    $swordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0PcLeft = () => {
    $swordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $swordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcLeft = () => {
    $swordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcLeft = () => {
    $swordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcLeft = () => {
    $swordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcLeft = () => {
    $swordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcLeft = () => {
    $swordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcLeft = () => {
    $swordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcLeft = () => {
    $swordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcLeft = () => {
    $swordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcLeft = () => {
    $swordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcLeft = () => {
    $swordSmokePcFullLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $swordSmokePcFullLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesPcRight = () => {
    $swordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0PcRight = () => {
    $swordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $swordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcRight = () => {
    $swordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcRight = () => {
    $swordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcRight = () => {
    $swordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcRight = () => {
    $swordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcRight = () => {
    $swordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcRight = () => {
    $swordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcRight = () => {
    $swordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcRight = () => {
    $swordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcRight = () => {
    $swordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcRight = () => {
    $swordSmokePcFullRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $swordSmokePcFullRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var swordProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "visible")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesPcDefendedLeft = () => {
    $swordFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var swordFireworkDisplays_0PcDefendedLeft = () => {
    $swordSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $swordFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcDefendedLeft = () => {
    $swordSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcDefendedLeft = () => {
    $swordSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcDefendedLeft = () => {
    $swordSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcDefendedLeft = () => {
    $swordSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcDefendedLeft = () => {
    $swordSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcDefendedLeft = () => {
    $swordSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcDefendedLeft = () => {
    $swordSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcDefendedLeft = () => {
    $swordSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcDefendedLeft = () => {
    $swordSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $swordSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")    
}

var swordFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "visible")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesPcDefendedRight = () => {
    $swordFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var swordFireworkDisplays_0PcDefendedRight = () => {
    $swordSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $swordFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1PcDefendedRight = () => {
    $swordSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2PcDefendedRight = () => {
    $swordSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3PcDefendedRight = () => {
    $swordSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4PcDefendedRight = () => {
    $swordSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5PcDefendedRight = () => {
    $swordSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6PcDefendedRight = () => {
    $swordSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7PcDefendedRight = () => {
    $swordSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8PcDefendedRight = () => {
    $swordSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9PcDefendedRight = () => {
    $swordSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $swordSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $swordSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")    
}

var swordFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// axeBow Scenario Pc

var axeBowProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeBowFireworkExplodesPcLeft = () => {
    $axeBowFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0PcLeft = () => {
    $axeBowSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcLeft = () => {
    $axeBowSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcLeft = () => {
    $axeBowSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcLeft = () => {
    $axeBowSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcLeft = () => {
    $axeBowSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcLeft = () => {
    $axeBowSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcLeft = () => {
    $axeBowSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcLeft = () => {
    $axeBowSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcLeft = () => {
    $axeBowSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcLeft = () => {
    $axeBowSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcLeft = () => {
    $axeBowSmokeFullPcLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
    $axeBowSmokeFullPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesPcRight = () => {
    $axeBowFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0PcRight = () => {
    $axeBowSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcRight = () => {
    $axeBowSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcRight = () => {
    $axeBowSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcRight = () => {
    $axeBowSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcRight = () => {
    $axeBowSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcRight = () => {
    $axeBowSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcRight = () => {
    $axeBowSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcRight = () => {
    $axeBowSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcRight = () => {
    $axeBowSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcRight = () => {
    $axeBowSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcRight = () => {
    $axeBowSmokeFullPcRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
    $axeBowSmokeFullPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeBowProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "visible")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "visible")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5PcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesPcDefendedLeft = () => {
    $axeBowFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var axeBowFireworkDisplays_0PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcDefendedLeft = () => {
    $axeBowSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcDefendedLeft = () => {
    $axeBowSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowPcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $axeBowSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_3PcRight.setAttribute("class", "visible")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "visible")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "visible")    
    $bottomFirework_5PcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesPcDefendedRight = () => {
    $axeBowFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var axeBowFireworkDisplays_0PcDefendedRight = () => {
    $axeBowSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeBowFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1PcDefendedRight = () => {
    $axeBowSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2PcDefendedRight = () => {
    $axeBowSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3PcDefendedRight = () => {
    $axeBowSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4PcDefendedRight = () => {
    $axeBowSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5PcDefendedRight = () => {
    $axeBowSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6PcDefendedRight = () => {
    $axeBowSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7PcDefendedRight = () => {
    $axeBowSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8PcDefendedRight = () => {
    $axeBowSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9PcDefendedRight = () => {
    $axeBowSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $axeBowSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "visible")
    $fireworkBowPcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $axeBowSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// axeSword Scenario Pc

var axeSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")        
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeSwordFireworkExplodesPcLeft = () => {
    $axeSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0PcLeft = () => {
    $axeSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcLeft = () => {
    $axeSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcLeft = () => {
    $axeSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcLeft = () => {
    $axeSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcLeft = () => {
    $axeSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcLeft = () => {
    $axeSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcLeft = () => {
    $axeSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcLeft = () => {
    $axeSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcLeft = () => {
    $axeSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcLeft = () => {
    $axeSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcLeft = () => {
    $axeSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $axeSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "hidden")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")        
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesPcRight = () => {
    $axeSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0PcRight = () => {
    $axeSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcRight = () => {
    $axeSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcRight = () => {
    $axeSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcRight = () => {
    $axeSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcRight = () => {
    $axeSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcRight = () => {
    $axeSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcRight = () => {
    $axeSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcRight = () => {
    $axeSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcRight = () => {
    $axeSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcRight = () => {
    $axeSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcRight = () => {
    $axeSwordSmokePcFullRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $axeSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeSwordProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "visible")
    $topFirework_7PcLeft.setAttribute("class", "visible")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesPcDefendedLeft = () => {
    $axeSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var axeSwordFireworkDisplays_0PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcDefendedLeft = () => {
    $axeSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcDefendedLeft = () => {
    $axeSwordSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $axeSwordSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")    
}

var axeSwordFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "visible")
    $topFirework_7PcRight.setAttribute("class", "visible")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesPcDefendedRight = () => {
    $axeSwordFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var axeSwordFireworkDisplays_0PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeSwordFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8PcDefendedRight = () => {
    $axeSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9PcDefendedRight = () => {
    $axeSwordSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "visible")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $axeSwordSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")    
}

var axeSwordFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// bowSword Scenario Pc

var bowSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")        
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var bowSwordFireworkExplodesPcLeft = () => {
    $bowSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0PcLeft = () => {
    $bowSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcLeft = () => {
    $bowSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcLeft = () => {
    $bowSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcLeft = () => {
    $bowSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcLeft = () => {
    $bowSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcLeft = () => {
    $bowSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcLeft = () => {
    $bowSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcLeft = () => {
    $bowSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcLeft = () => {
    $bowSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcLeft = () => {
    $bowSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcLeft = () => {
    $bowSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $bowSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12PcRight = () => {
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "visible")        
    $bottomFirework_2PcRight.setAttribute("class", "hidden")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesPcRight = () => {
    $bowSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0PcRight = () => {
    $bowSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcRight = () => {
    $bowSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcRight = () => {
    $bowSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcRight = () => {
    $bowSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcRight = () => {
    $bowSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcRight = () => {
    $bowSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcRight = () => {
    $bowSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcRight = () => {
    $bowSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcRight = () => {
    $bowSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcRight = () => {
    $bowSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcRight = () => {
    $bowSwordSmokePcFullRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $bowSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var bowSwordProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "visible")
    $topFirework_7Z_4PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "visible")    
    $middleFirework_6PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesPcDefendedLeft = () => {
    $bowSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var bowSwordFireworkDisplays_0PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcDefendedLeft = () => {
    $bowSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcDefendedLeft = () => {
    $bowSwordSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $bowSwordSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")    
}

var bowSwordFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "visible")
    $topFirework_7Z_4PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_5PcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "visible")    
    $middleFirework_6PcRight.setAttribute("class", "visible")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesPcDefendedRight = () => {
    $bowSwordFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var bowSwordFireworkDisplays_0PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $bowSwordFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8PcDefendedRight = () => {
    $bowSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9PcDefendedRight = () => {
    $bowSwordSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordPcDefendedRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $bowSwordSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")    
}

var bowSwordFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

// axeBowSword Scenario Pc

var axeBowSwordProtrudingFlyingFireworks_0PcLeft = () => {
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1PcLeft = () => {
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2PcLeft = () => {
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3PcLeft = () => {
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4PcLeft = () => {
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5PcLeft = () => {
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6PcLeft = () => {
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7PcLeft = () => {
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8PcLeft = () => {
    $topFirework_0PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9PcLeft = () => {
    $topFirework_1PcLeft.setAttribute("class", "visible")
    $middleFirework_0PcLeft.setAttribute("class", "visible")    
    $topFirework_0PcLeft.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10PcLeft = () => {
    $topFirework_2PcLeft.setAttribute("class", "visible")
    $middleFirework_1PcLeft.setAttribute("class", "visible")
    $bottomFirework_0PcLeft.setAttribute("class", "visible")
    $topFirework_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_0PcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_11PcLeft = () => {
    $topFirework_3PcLeft.setAttribute("class", "visible")    
    $middleFirework_2PcLeft.setAttribute("class", "visible")    
    $bottomFirework_1PcLeft.setAttribute("class", "visible")
    $topFirework_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_1PcLeft.setAttribute("class", "hidden")
    $bottomFirework_0PcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12PcLeft = () => {
    $topFirework_4PcLeft.setAttribute("class", "visible")    
    $middleFirework_3PcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_2PcLeft.setAttribute("class", "visible")
    $topFirework_3PcLeft.setAttribute("class", "hidden")    
    $middleFirework_2PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_1PcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13PcLeft = () => {
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_5PcLeft.setAttribute("class", "visible")    
    $middleFirework_4PcLeft.setAttribute("class", "visible")    
    $bottomFirework_3PcLeft.setAttribute("class", "visible")
    $topFirework_4PcLeft.setAttribute("class", "hidden")    
    $middleFirework_3PcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_2PcLeft.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14PcLeft = () => {
    $middleFirework_5Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "visible")
    $topFirework_6PcLeft.setAttribute("class", "visible")    
    $middleFirework_5PcLeft.setAttribute("class", "visible")    
    $bottomFirework_4PcLeft.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_5PcLeft.setAttribute("class", "hidden")    
    $middleFirework_4PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_3PcLeft.setAttribute("class", "hidden")                    
}

//successful hit

var axeBowSwordFireworkExplodesPcLeft = () => {
    $axeBowSwordFireworkExplosionPcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0PcLeft = () => {
    $axeBowSwordSmokePcFullMinus10Left.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcLeft = () => {
    $axeBowSwordSmokePcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcLeft = () => {
    $axeBowSwordSmokePcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcLeft = () => {
    $axeBowSwordSmokePcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcLeft = () => {
    $axeBowSwordSmokePcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcLeft = () => {
    $axeBowSwordSmokePcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcLeft = () => {
    $axeBowSwordSmokePcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcLeft = () => {
    $axeBowSwordSmokePcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcLeft = () => {
    $axeBowSwordSmokePcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcLeft = () => {
    $axeBowSwordSmokePcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcLeft = () => {
    $axeBowSwordSmokePcFullLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "visible")
    $fireworkBowPcLeft.setAttribute("class", "visible")
    $fireworkSwordPcLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13PcLeft = () => {
    $fireworkAxePcLeft.setAttribute("class", "hidden")
    $fireworkBowPcLeft.setAttribute("class", "hidden")
    $fireworkSwordPcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14PcLeft = () => {
    $fireworkAxeShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_0PcRight = () => {
    $protrudingFireworkTop_0PcRight.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1PcRight = () => {
    $protrudingFireworkTop_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0PcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2PcRight = () => {
    $protrudingFireworkTop_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0PcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3PcRight = () => {
    $protrudingFireworkTop_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4PcRight = () => {
    $protrudingFireworkTop_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5PcRight = () => {
    $protrudingFireworkTop_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6PcRight = () => {
    $protrudingFireworkTop_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7PcRight = () => {
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8PcRight = () => {
    $topFirework_0PcRight.setAttribute("class", "visible")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "visible")    
    $protrudingFireworkMiddle_6PcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9PcRight = () => {
    $topFirework_1PcRight.setAttribute("class", "visible")
    $middleFirework_0PcRight.setAttribute("class", "visible")    
    $topFirework_0PcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6PcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10PcRight = () => {
    $topFirework_2PcRight.setAttribute("class", "visible")
    $middleFirework_1PcRight.setAttribute("class", "visible")
    $bottomFirework_0PcRight.setAttribute("class", "visible")
    $topFirework_1PcRight.setAttribute("class", "hidden")
    $middleFirework_0PcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_11PcRight = () => {
    $topFirework_3PcRight.setAttribute("class", "visible")    
    $middleFirework_2PcRight.setAttribute("class", "visible")    
    $bottomFirework_1PcRight.setAttribute("class", "visible")
    $topFirework_2PcRight.setAttribute("class", "hidden")
    $middleFirework_1PcRight.setAttribute("class", "hidden")
    $bottomFirework_0PcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12PcRight = () => {
    $topFirework_4PcRight.setAttribute("class", "visible")    
    $middleFirework_3PcRight.setAttribute("class", "visible")
    $middleFirework_3Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_2PcRight.setAttribute("class", "visible")
    $topFirework_3PcRight.setAttribute("class", "hidden")    
    $middleFirework_2PcRight.setAttribute("class", "hidden")    
    $bottomFirework_1PcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13PcRight = () => {
    $bottomFirework_3Z_1PcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_5PcRight.setAttribute("class", "visible")    
    $middleFirework_4PcRight.setAttribute("class", "visible")    
    $bottomFirework_3PcRight.setAttribute("class", "visible")
    $topFirework_4PcRight.setAttribute("class", "hidden")    
    $middleFirework_3PcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_2PcRight.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14PcRight = () => {
    $middleFirework_5Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "visible")
    $topFirework_6PcRight.setAttribute("class", "visible")    
    $middleFirework_5PcRight.setAttribute("class", "visible")    
    $bottomFirework_4PcRight.setAttribute("class", "visible")
    $bottomFirework_3Z_1PcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_5PcRight.setAttribute("class", "hidden")    
    $middleFirework_4PcRight.setAttribute("class", "hidden")    
    $bottomFirework_3PcRight.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesPcRight = () => {
    $axeBowSwordFireworkExplosionPcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0PcRight = () => {
    $axeBowSwordSmokePcFullMinus10Right.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcRight = () => {
    $axeBowSwordSmokePcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcRight = () => {
    $axeBowSwordSmokePcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcRight = () => {
    $axeBowSwordSmokePcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcRight = () => {
    $axeBowSwordSmokePcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcRight = () => {
    $axeBowSwordSmokePcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcRight = () => {
    $axeBowSwordSmokePcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcRight = () => {
    $axeBowSwordSmokePcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcRight = () => {
    $axeBowSwordSmokePcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcRight = () => {
    $axeBowSwordSmokePcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcRight = () => {
    $axeBowSwordSmokePcFullRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "visible")
    $fireworkBowPcRight.setAttribute("class", "visible")
    $fireworkSwordPcRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13PcRight = () => {
    $fireworkAxePcRight.setAttribute("class", "hidden")
    $fireworkBowPcRight.setAttribute("class", "hidden")
    $fireworkSwordPcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14PcRight = () => {
    $fireworkAxeShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullRight.setAttribute("class", "hidden")
}

// Unsuccessful hit

var axeBowSwordProtrudingFlyingFireworks_15PcLeft = () => {
    $topFirework_7Z_0PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "visible")
    $topFirework_7Z_4PcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "visible")
    $topFirework_7PcLeft.setAttribute("class", "visible")    
    $middleFirework_6PcLeft.setAttribute("class", "visible")    
    $bottomFirework_5PcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcLeft.setAttribute("class", "hidden")
    $topFirework_6PcLeft.setAttribute("class", "hidden")    
    $middleFirework_5PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_4PcLeft.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesPcDefendedLeft = () => {
    $axeBowSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_0PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcLeft.setAttribute("class", "hidden")
    $topFirework_7Z_4PcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcLeft.setAttribute("class", "hidden")
    $topFirework_7PcLeft.setAttribute("class", "hidden")    
    $middleFirework_6PcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5PcLeft.setAttribute("class", "hidden")                          
}

var axeBowSwordFireworkDisplays_0PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcDefendedLeft = () => {
    $axeBowSwordSmokePcFullDefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowPcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_11PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_12PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_13PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "visible")    
}

var axeBowSwordFireworkDisplays_14PcDefendedLeft = () => {
    $fireworkAxePcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowPcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_15PcDefendedLeft = () => {
    $fireworkAxeShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_15PcRight = () => {
    $topFirework_7Z_0PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_1PcRight.setAttribute("class", "visible")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_3PcRight.setAttribute("class", "visible")
    $topFirework_7Z_4PcRight.setAttribute("class", "visible")
    $middleFirework_6Z_5PcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "visible")
    $topFirework_7PcRight.setAttribute("class", "visible")    
    $middleFirework_6PcRight.setAttribute("class", "visible")    
    $bottomFirework_5PcRight.setAttribute("class", "visible")
    $middleFirework_5Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4Z_2PcRight.setAttribute("class", "hidden")
    $topFirework_6PcRight.setAttribute("class", "hidden")    
    $middleFirework_5PcRight.setAttribute("class", "hidden")    
    $bottomFirework_4PcRight.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesPcDefendedRight = () => {
    $axeBowSwordFireworkExplosionPcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_0PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_1PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5Z_2PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_3PcRight.setAttribute("class", "hidden")
    $topFirework_7Z_4PcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_5PcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_6PcRight.setAttribute("class", "hidden")
    $topFirework_7PcRight.setAttribute("class", "hidden")    
    $middleFirework_6PcRight.setAttribute("class", "hidden")    
    $bottomFirework_5PcRight.setAttribute("class", "hidden")                          
}

var axeBowSwordFireworkDisplays_0PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionPcDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8PcDefendedRight = () => {
    $axeBowSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9PcDefendedRight = () => {
    $axeBowSwordSmokePcFullDefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokePcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "visible")
    $fireworkBowPcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordPcDefendedRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_11PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $axeBowSwordSmokePcFullDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_12PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_13PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "visible")    
}

var axeBowSwordFireworkDisplays_14PcDefendedRight = () => {
    $fireworkAxePcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowPcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordPcDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_15PcDefendedRight = () => {
    $fireworkAxeShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerPcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerPcFullDefendedRight.setAttribute("class", "hidden")
}

//npc greyWiz

var greyWizNpcDefendsLeft = () => {
    $greyWizArmNpcDefendLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")     
}

var greyWizNpcDefendsRight = () => {
    $greyWizArmNpcDefendRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")  
}

var greyWizNpcRestsArmLeft = () => {
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")     
}

var greyWizNpcRestsArmRight = () => {
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")     
}

var greyWizNpcStruckLeft = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefendRight.setAttribute("class", "hidden")    
    $greyWizNpcStruckLeft.setAttribute("class", "visible")
}

var greyWizNpcStruckRight = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefendLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizNpcStruckRight.setAttribute("class", "visible")
}

var greyWizNpcRegainsComposureLeft = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")    
    $greyWizNpcStruckLeft.setAttribute("class", "hidden")
}

var greyWizNpcRegainsComposureRight = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcStruckRight.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_0Left = () => {
    $greyWizNpcWithoutHands.setAttribute("class", "visible")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_1Left = () => {
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_2Left = () => {
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "visible")    
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_0Right = () => {
    $greyWizNpcWithoutHands.setAttribute("class", "visible")
    $greyWizHandNpc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizNpcWithoutArms.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultRight.setAttribute("class", "hidden")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "hidden")
}

var greyWizArmNpcRotationForAttack_1Right = () => {
    $greyWizHandNpc330DegreesRight.setAttribute("class", "visible")    
    $greyWizHandNpc345DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationForAttack_2Right = () => {
    $greyWizHandNpc315DegreesRight.setAttribute("class", "visible")    
    $greyWizHandNpc330DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_0Left = () => {        
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc45DegreesLeft.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_1Left = () => {
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "visible")
    $greyWizHandNpc30DegreesLeft.setAttribute("class", "hidden")        
}

var greyWizArmNpcRotationBackFromAttack_2Left = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizNpcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandNpc15DegreesLeft.setAttribute("class", "hidden")
    $greyWizHandNpcDefaultRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_0Right = () => {        
    $greyWizHandNpc330DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpc315DegreesRight.setAttribute("class", "hidden")    
}

var greyWizArmNpcRotationBackFromAttack_1Right = () => {
    $greyWizHandNpc345DegreesRight.setAttribute("class", "visible")
    $greyWizHandNpc330DegreesRight.setAttribute("class", "hidden")        
}

var greyWizArmNpcRotationBackFromAttack_2Right = () => {
    $greyWizNpcWithoutArms.setAttribute("class", "visible")
    $greyWizArmNpcDefaultRight.setAttribute("class", "visible")
    $greyWizArmNpcDefaultLeft.setAttribute("class", "visible")
    $greyWizNpcWithoutHands.setAttribute("class", "hidden")
    $greyWizHandNpc345DegreesRight.setAttribute("class", "hidden")
    $greyWizHandNpcDefaultLeft.setAttribute("class", "hidden")    
}

// axe Scenario

var axeProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeFireworkExplodesNpcLeft = () => {
    $axeFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0NpcLeft = () => {
    $axeSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcLeft = () => {
    $axeSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcLeft = () => {
    $axeSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcLeft = () => {
    $axeSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcLeft = () => {
    $axeSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcLeft = () => {
    $axeSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcLeft = () => {
    $axeSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcLeft = () => {
    $axeSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcLeft = () => {
    $axeSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcLeft = () => {
    $axeSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcLeft = () => {
    $axeSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")    
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")    
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeFireworkExplodesNpcRight = () => {
    $axeFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeFireworkDisplays_0NpcRight = () => {
    $axeSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcRight = () => {
    $axeSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcRight = () => {
    $axeSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcRight = () => {
    $axeSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcRight = () => {
    $axeSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcRight = () => {
    $axeSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcRight = () => {
    $axeSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcRight = () => {
    $axeSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcRight = () => {
    $axeSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcRight = () => {
    $axeSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcRight = () => {
    $axeSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $axeSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "visible")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var axeFireworkExplodesNpcDefendedLeft = () => {
    $axeFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var axeFireworkDisplays_0NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcDefendedLeft = () => {
    $axeSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcDefendedLeft = () => {
    $axeSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $axeSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "visible")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var axeFireworkExplodesNpcDefendedRight = () => {
    $axeFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var axeFireworkDisplays_0NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_1NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_2NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_3NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_4NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_5NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_6NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_7NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_8NpcDefendedRight = () => {
    $axeSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_9NpcDefendedRight = () => {
    $axeSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $axeSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "visible")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $axeSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// bow Scenario

var bowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var bowFireworkExplodesNpcLeft = () => {
    $bowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0NpcLeft = () => {
    $bowSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $bowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcLeft = () => {
    $bowSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcLeft = () => {
    $bowSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcLeft = () => {
    $bowSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcLeft = () => {
    $bowSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcLeft = () => {
    $bowSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcLeft = () => {
    $bowSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcLeft = () => {
    $bowSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcLeft = () => {
    $bowSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcLeft = () => {
    $bowSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcLeft = () => {
    $bowSmokeNpcFullLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $bowSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var bowProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var bowProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var bowProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var bowProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var bowFireworkExplodesNpcRight = () => {
    $bowFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var bowFireworkDisplays_0NpcRight = () => {
    $bowSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $bowFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcRight = () => {
    $bowSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcRight = () => {
    $bowSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcRight = () => {
    $bowSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcRight = () => {
    $bowSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcRight = () => {
    $bowSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcRight = () => {
    $bowSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcRight = () => {
    $bowSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcRight = () => {
    $bowSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcRight = () => {
    $bowSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcRight = () => {
    $bowSmokeNpcFullRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $bowSmokeNpcFullRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var bowProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "visible")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var bowFireworkExplodesNpcDefendedLeft = () => {
    $bowFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var bowFireworkDisplays_0NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $bowFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcDefendedLeft = () => {
    $bowSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcDefendedLeft = () => {
    $bowSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $bowSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var bowFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "visible")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var bowFireworkExplodesNpcDefendedRight = () => {
    $bowFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var bowFireworkDisplays_0NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $bowFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_1NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_2NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_3NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_4NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_5NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_6NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_7NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_8NpcDefendedRight = () => {
    $bowSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_9NpcDefendedRight = () => {
    $bowSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $bowSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $bowSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var bowFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// sword Scenario

var swordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var swordFireworkExplodesNpcLeft = () => {
    $swordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0NpcLeft = () => {
    $swordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $swordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcLeft = () => {
    $swordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcLeft = () => {
    $swordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcLeft = () => {
    $swordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcLeft = () => {
    $swordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcLeft = () => {
    $swordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcLeft = () => {
    $swordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcLeft = () => {
    $swordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcLeft = () => {
    $swordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcLeft = () => {
    $swordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcLeft = () => {
    $swordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $swordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var swordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var swordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var swordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var swordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var swordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var swordFireworkExplodesNpcRight = () => {
    $swordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var swordFireworkDisplays_0NpcRight = () => {
    $swordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $swordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcRight = () => {
    $swordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcRight = () => {
    $swordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcRight = () => {
    $swordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcRight = () => {
    $swordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcRight = () => {
    $swordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcRight = () => {
    $swordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcRight = () => {
    $swordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcRight = () => {
    $swordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcRight = () => {
    $swordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcRight = () => {
    $swordSmokeNpcFullRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $swordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var swordProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "visible")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var swordFireworkExplodesNpcDefendedLeft = () => {
    $swordFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var swordFireworkDisplays_0NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $swordFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcDefendedLeft = () => {
    $swordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcDefendedLeft = () => {
    $swordSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "visible")
}

var swordFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $swordSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")    
}

var swordFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var swordFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var swordProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "visible")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var swordFireworkExplodesNpcDefendedRight = () => {
    $swordFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var swordFireworkDisplays_0NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $swordFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_1NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_2NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_3NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_4NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_5NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_6NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_7NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_8NpcDefendedRight = () => {
    $swordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_9NpcDefendedRight = () => {
    $swordSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $swordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "visible")
}

var swordFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $swordSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var swordFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")    
}

var swordFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var swordFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// axeBow Scenario

var axeBowProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeBowFireworkExplodesNpcLeft = () => {
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0NpcLeft = () => {
    $axeBowSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcLeft = () => {
    $axeBowSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcLeft = () => {
    $axeBowSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcLeft = () => {
    $axeBowSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcLeft = () => {
    $axeBowSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcLeft = () => {
    $axeBowSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcLeft = () => {
    $axeBowSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcLeft = () => {
    $axeBowSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcLeft = () => {
    $axeBowSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcLeft = () => {
    $axeBowSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcLeft = () => {
    $axeBowSmokeFullNpcLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
    $axeBowSmokeFullNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeBowProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeBowProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeBowProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeBowProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeBowFireworkExplodesNpcRight = () => {
    $axeBowFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeBowFireworkDisplays_0NpcRight = () => {
    $axeBowSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcRight = () => {
    $axeBowSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcRight = () => {
    $axeBowSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcRight = () => {
    $axeBowSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcRight = () => {
    $axeBowSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcRight = () => {
    $axeBowSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcRight = () => {
    $axeBowSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcRight = () => {
    $axeBowSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcRight = () => {
    $axeBowSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcRight = () => {
    $axeBowSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcRight = () => {
    $axeBowSmokeFullNpcRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
    $axeBowSmokeFullNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeBowProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "visible")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "visible")    
    $bottomFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var axeBowFireworkExplodesNpcDefendedLeft = () => {
    $axeBowFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var axeBowFireworkDisplays_0NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcDefendedLeft = () => {
    $axeBowSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $axeBowSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "visible")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "visible")    
    $bottomFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var axeBowFireworkExplodesNpcDefendedRight = () => {
    $axeBowFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var axeBowFireworkDisplays_0NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeBowFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_1NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_2NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_3NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_4NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_5NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_6NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_7NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_8NpcDefendedRight = () => {
    $axeBowSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_9NpcDefendedRight = () => {
    $axeBowSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $axeBowSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "visible")
    $fireworkBowNpcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $axeBowSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeBowFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// axeSword Scenario

var axeSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeSwordFireworkExplodesNpcLeft = () => {
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcLeft = () => {
    $axeSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcLeft = () => {
    $axeSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var axeSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeSwordFireworkExplodesNpcRight = () => {
    $axeSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeSwordFireworkDisplays_0NpcRight = () => {
    $axeSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcRight = () => {
    $axeSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcRight = () => {
    $axeSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcRight = () => {
    $axeSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcRight = () => {
    $axeSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcRight = () => {
    $axeSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcRight = () => {
    $axeSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcRight = () => {
    $axeSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcRight = () => {
    $axeSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcRight = () => {
    $axeSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcRight = () => {
    $axeSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeSwordProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "visible")        
    $topFirework_7NpcLeft.setAttribute("class", "visible")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var axeSwordFireworkExplodesNpcDefendedLeft = () => {
    $axeSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var axeSwordFireworkDisplays_0NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcDefendedLeft = () => {
    $axeSwordSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")    
}

var axeSwordFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeSwordProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "visible")        
    $topFirework_7NpcRight.setAttribute("class", "visible")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var axeSwordFireworkExplodesNpcDefendedRight = () => {
    $axeSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var axeSwordFireworkDisplays_0NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_1NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_2NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_3NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_4NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_5NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_6NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_7NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_8NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_9NpcDefendedRight = () => {
    $axeSwordSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $axeSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "visible")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "visible")
}

var axeSwordFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $axeSwordSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeSwordFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")    
}

var axeSwordFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeSwordFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// bowSword Scenario

var bowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var bowSwordFireworkExplodesNpcLeft = () => {
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcLeft = () => {
    $bowSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcLeft = () => {
    $bowSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var bowSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var bowSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var bowSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var bowSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var bowSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var bowSwordFireworkExplodesNpcRight = () => {
    $bowSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var bowSwordFireworkDisplays_0NpcRight = () => {
    $bowSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcRight = () => {
    $bowSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcRight = () => {
    $bowSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcRight = () => {
    $bowSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcRight = () => {
    $bowSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcRight = () => {
    $bowSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcRight = () => {
    $bowSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcRight = () => {
    $bowSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcRight = () => {
    $bowSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcRight = () => {
    $bowSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcRight = () => {
    $bowSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var bowSwordProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "visible")    
    $middleFirework_6NpcLeft.setAttribute("class", "visible")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var bowSwordFireworkExplodesNpcDefendedLeft = () => {
    $bowSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var bowSwordFireworkDisplays_0NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcDefendedLeft = () => {
    $bowSwordSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")    
}

var bowSwordFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var bowSwordProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "visible")    
    $middleFirework_6NpcRight.setAttribute("class", "visible")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var bowSwordFireworkExplodesNpcDefendedRight = () => {
    $bowSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var bowSwordFireworkDisplays_0NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $bowSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_1NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_2NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_3NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_4NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_5NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_6NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_7NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_8NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_9NpcDefendedRight = () => {
    $bowSwordSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $bowSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "visible")
}

var bowSwordFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $bowSwordSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var bowSwordFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")    
}

var bowSwordFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var bowSwordFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

// axeBowSword Scenario

var axeBowSwordProtrudingFlyingFireworks_0NpcLeft = () => {
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1NpcLeft = () => {
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2NpcLeft = () => {
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3NpcLeft = () => {
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4NpcLeft = () => {
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5NpcLeft = () => {
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6NpcLeft = () => {
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7NpcLeft = () => {
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8NpcLeft = () => {
    $topFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9NpcLeft = () => {
    $topFirework_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_0NpcLeft.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "visible")
    $topFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcLeft.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10NpcLeft = () => {
    $topFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_1NpcLeft.setAttribute("class", "visible")
    $bottomFirework_0NpcLeft.setAttribute("class", "visible")
    $topFirework_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_0NpcLeft.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_11NpcLeft = () => {
    $topFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_1NpcLeft.setAttribute("class", "visible")
    $topFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_1NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_0NpcLeft.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12NpcLeft = () => {
    $topFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_2NpcLeft.setAttribute("class", "visible")
    $topFirework_3NpcLeft.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_1NpcLeft.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13NpcLeft = () => {
    $topFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_4NpcLeft.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_3NpcLeft.setAttribute("class", "visible")
    $topFirework_4NpcLeft.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_2NpcLeft.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14NpcLeft = () => {
    $topFirework_6NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "visible")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "visible")
    $middleFirework_5NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "visible")
    $bottomFirework_4NpcLeft.setAttribute("class", "visible")
    $topFirework_5NpcLeft.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4NpcLeft.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_3NpcLeft.setAttribute("class", "hidden")                    
}

//Successful hit

var axeBowSwordFireworkExplodesNpcLeft = () => {
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus10Left.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus9Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus10Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus8Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus7Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus6Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus5Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus4Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus3Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus2Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcLeft = () => {
    $axeBowSwordSmokeNpcFullMinus1Left.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcLeft = () => {
    $axeBowSwordSmokeNpcFullLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1Left.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "visible")
    $fireworkBowNpcLeft.setAttribute("class", "visible")
    $fireworkSwordNpcLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13NpcLeft = () => {
    $fireworkAxeNpcLeft.setAttribute("class", "hidden")
    $fireworkBowNpcLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14NpcLeft = () => {
    $fireworkAxeShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_0NpcRight = () => {
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "visible")
}

var axeBowSwordProtrudingFlyingFireworks_1NpcRight = () => {
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_0NpcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_2NpcRight = () => {
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_0NpcRight.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_3NpcRight = () => {
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_1NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_0NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_4NpcRight = () => {
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_2NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_1NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_5NpcRight = () => {
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_3NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_2NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_6NpcRight = () => {
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_4NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_3NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_7NpcRight = () => {
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_5NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_4NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_8NpcRight = () => {
    $topFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "visible")
    $protrudingFireworkTop_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_6NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_5NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_9NpcRight = () => {
    $topFirework_1NpcRight.setAttribute("class", "visible")
    $middleFirework_0NpcRight.setAttribute("class", "visible")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "visible")
    $topFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkMiddle_7NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_6NpcRight.setAttribute("class", "hidden")    
}

var axeBowSwordProtrudingFlyingFireworks_10NpcRight = () => {
    $topFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_1NpcRight.setAttribute("class", "visible")
    $bottomFirework_0NpcRight.setAttribute("class", "visible")
    $topFirework_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_0NpcRight.setAttribute("class", "hidden")
    $protrudingFireworkBottom_7NpcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_11NpcRight = () => {
    $topFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_3Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_2NpcRight.setAttribute("class", "visible")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_1NpcRight.setAttribute("class", "visible")
    $topFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_1NpcRight.setAttribute("class", "hidden")
    $bottomFirework_0NpcRight.setAttribute("class", "hidden")        
}

var axeBowSwordProtrudingFlyingFireworks_12NpcRight = () => {
    $topFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_4Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_3NpcRight.setAttribute("class", "visible")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_2NpcRight.setAttribute("class", "visible")
    $topFirework_3NpcRight.setAttribute("class", "hidden")
    $topFirework_3Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_2Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_1NpcRight.setAttribute("class", "hidden")            
}

var axeBowSwordProtrudingFlyingFireworks_13NpcRight = () => {
    $topFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_5Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_4NpcRight.setAttribute("class", "visible")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_3NpcRight.setAttribute("class", "visible")
    $topFirework_4NpcRight.setAttribute("class", "hidden")
    $topFirework_4Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_3Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_2NpcRight.setAttribute("class", "hidden")                
}

var axeBowSwordProtrudingFlyingFireworks_14NpcRight = () => {
    $topFirework_6NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_1NpcRight.setAttribute("class", "visible")
    $topFirework_6Z_3NpcRight.setAttribute("class", "visible")
    $middleFirework_5NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "visible")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "visible")
    $bottomFirework_4NpcRight.setAttribute("class", "visible")
    $topFirework_5NpcRight.setAttribute("class", "hidden")
    $topFirework_5Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_4NpcRight.setAttribute("class", "hidden")
    $middleFirework_4Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_3NpcRight.setAttribute("class", "hidden")                    
}

var axeBowSwordFireworkExplodesNpcRight = () => {
    $axeBowSwordFireworkExplosionNpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")                        
}

var axeBowSwordFireworkDisplays_0NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus10Right.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus9Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus10Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus8Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus7Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus6Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus5Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus4Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus3Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus2Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcRight = () => {
    $axeBowSwordSmokeNpcFullMinus1Right.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcRight = () => {
    $axeBowSwordSmokeNpcFullRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1Right.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_11NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "visible")
    $fireworkBowNpcRight.setAttribute("class", "visible")
    $fireworkSwordNpcRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_12NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_13NpcRight = () => {
    $fireworkAxeNpcRight.setAttribute("class", "hidden")
    $fireworkBowNpcRight.setAttribute("class", "hidden")
    $fireworkSwordNpcRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_14NpcRight = () => {
    $fireworkAxeShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullRight.setAttribute("class", "hidden")
}

//Unsuccessful hit

var axeBowSwordProtrudingFlyingFireworks_15NpcLeft = () => {        
    $topFirework_7Z_1NpcLeft.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "visible")        
    $topFirework_7NpcLeft.setAttribute("class", "visible")    
    $middleFirework_6NpcLeft.setAttribute("class", "visible")    
    $bottomFirework_5NpcLeft.setAttribute("class", "visible")
    $topFirework_6NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcLeft.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcLeft.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_4NpcLeft.setAttribute("class", "hidden")               
}

var axeBowSwordFireworkExplodesNpcDefendedLeft = () => {
    $axeBowSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "visible")
    $topFirework_7Z_1NpcLeft.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcLeft.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcLeft.setAttribute("class", "hidden")        
    $topFirework_7NpcLeft.setAttribute("class", "hidden")    
    $middleFirework_6NpcLeft.setAttribute("class", "hidden")    
    $bottomFirework_5NpcLeft.setAttribute("class", "hidden")                          
}

var axeBowSwordFireworkDisplays_0NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcDefendedLeft = () => {
    $axeBowSwordSmokeNpcFullDefendedLeft.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1DefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_11NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_12NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_13NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "visible")    
}

var axeBowSwordFireworkDisplays_14NpcDefendedLeft = () => {
    $fireworkAxeNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_15NpcDefendedLeft = () => {
    $fireworkAxeShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedLeft.setAttribute("class", "hidden")
}

var axeBowSwordProtrudingFlyingFireworks_15NpcRight = () => {        
    $topFirework_7Z_1NpcRight.setAttribute("class", "visible")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "visible")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "visible")        
    $topFirework_7NpcRight.setAttribute("class", "visible")    
    $middleFirework_6NpcRight.setAttribute("class", "visible")    
    $bottomFirework_5NpcRight.setAttribute("class", "visible")
    $topFirework_6NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_1NpcRight.setAttribute("class", "hidden")
    $topFirework_6Z_3NpcRight.setAttribute("class", "hidden")
    $middleFirework_5NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_2NpcRight.setAttribute("class", "hidden")
    $middleFirework_5Z_4NpcRight.setAttribute("class", "hidden")
    $bottomFirework_4NpcRight.setAttribute("class", "hidden")               
}

var axeBowSwordFireworkExplodesNpcDefendedRight = () => {
    $axeBowSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "visible")
    $topFirework_7Z_1NpcRight.setAttribute("class", "hidden")
    $middleFirework_6Z_2NpcRight.setAttribute("class", "hidden")
    $bottomFirework_5Z_3NpcRight.setAttribute("class", "hidden")        
    $topFirework_7NpcRight.setAttribute("class", "hidden")    
    $middleFirework_6NpcRight.setAttribute("class", "hidden")    
    $bottomFirework_5NpcRight.setAttribute("class", "hidden")                          
}

var axeBowSwordFireworkDisplays_0NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "visible")
    $axeBowSwordFireworkExplosionNpcDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_1NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus9DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_2NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus8DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_3NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus7DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_4NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus6DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_5NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus5DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_6NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus4DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_7NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus3DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_8NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus2DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_9NpcDefendedRight = () => {
    $axeBowSwordSmokeNpcFullDefendedRight.setAttribute("class", "visible")        
    $axeBowSwordSmokeNpcFullMinus1DefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_10NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "visible")
    $fireworkBowNpcDefendedRight.setAttribute("class", "visible")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "visible")
}

var axeBowSwordFireworkDisplays_11NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $axeBowSwordSmokeNpcFullDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_12NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")    
}

var axeBowSwordFireworkDisplays_13NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "visible")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "visible")    
}

var axeBowSwordFireworkDisplays_14NpcDefendedRight = () => {
    $fireworkAxeNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkBowNpcDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordNpcDefendedRight.setAttribute("class", "hidden")
}

var axeBowSwordFireworkDisplays_15NpcDefendedRight = () => {
    $fireworkAxeShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkBowShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
    $fireworkSwordShimmerNpcFullDefendedRight.setAttribute("class", "hidden")
}

//pc redWiz

var redWizPcDefendsLeft = () => {
    $redWizPcDefendLeft.setAttribute("class", "visible")
}

var redWizPcDefendsRight = () => {
    $redWizPcDefendRight.setAttribute("class", "visible")
}

var redWizPcRestsLeft = () => {    
    $redWizPcDefendLeft.setAttribute("class", "hidden")     
}

var redWizPcRestsRight = () => {    
    $redWizPcDefendRight.setAttribute("class", "hidden")     
}

var redWizPcStruckLeft = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendRight.setAttribute("class", "hidden")
    $redWizPcStruckLeft.setAttribute("class", "visible")
}

var redWizPcStruckRight = () => {
    $redWizPc.setAttribute("class", "hidden")
    $redWizPcDefendLeft.setAttribute("class", "hidden")
    $redWizPcStruckRight.setAttribute("class", "visible")
}

var redWizPcRegainsComposureLeft = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckLeft.setAttribute("class", "hidden")
}

var redWizPcRegainsComposureRight = () => {
    $redWizPc.setAttribute("class", "visible")
    $redWizPcStruckRight.setAttribute("class", "hidden")
}

//npc redWiz

var redWizNpcDefendsLeft = () => {
    $redWizNpcDefendLeft.setAttribute("class", "visible")
}

var redWizNpcDefendsRight = () => {
    $redWizNpcDefendRight.setAttribute("class", "visible")
}

var redWizNpcRestsLeft = () => {    
    $redWizNpcDefendLeft.setAttribute("class", "hidden")     
}

var redWizNpcRestsRight = () => {    
    $redWizNpcDefendRight.setAttribute("class", "hidden")     
}

var redWizNpcStruckLeft = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendRight.setAttribute("class", "hidden")
    $redWizNpcStruckLeft.setAttribute("class", "visible")
}

var redWizNpcStruckRight = () => {
    $redWizNpc.setAttribute("class", "hidden")
    $redWizNpcDefendLeft.setAttribute("class", "hidden")
    $redWizNpcStruckRight.setAttribute("class", "visible")
}

var redWizNpcRegainsComposureLeft = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckLeft.setAttribute("class", "hidden")
}

var redWizNpcRegainsComposureRight = () => {
    $redWizNpc.setAttribute("class", "visible")
    $redWizNpcStruckRight.setAttribute("class", "hidden")
}

window.onload = init;

//greyPcDefendLeftGreyNpcAttackLeft axeBow

setTimeout(greyWizPcBackground, 1);
setTimeout(setSceneWithGreyPc, 2);
setTimeout(setSceneWithGreyNpc, 3);
setTimeout(greyWizPcDefendsLeft, 200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 350);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 500);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 650);
setTimeout(axeBowProtrudingFlyingFireworks_0NpcLeft, 750);
setTimeout(axeBowProtrudingFlyingFireworks_1NpcLeft, 870);
setTimeout(axeBowProtrudingFlyingFireworks_2NpcLeft, 990);
setTimeout(axeBowProtrudingFlyingFireworks_3NpcLeft, 1110);
setTimeout(axeBowProtrudingFlyingFireworks_4NpcLeft, 1150);
setTimeout(axeBowProtrudingFlyingFireworks_5NpcLeft, 1250);
setTimeout(axeBowProtrudingFlyingFireworks_6NpcLeft, 1350);
setTimeout(axeBowProtrudingFlyingFireworks_7NpcLeft, 1450);
setTimeout(axeBowProtrudingFlyingFireworks_8NpcLeft, 1550);
setTimeout(axeBowProtrudingFlyingFireworks_9NpcLeft, 1750);
setTimeout(axeBowProtrudingFlyingFireworks_10NpcLeft, 1950);
setTimeout(axeBowProtrudingFlyingFireworks_11NpcLeft, 2200);
setTimeout(axeBowProtrudingFlyingFireworks_12NpcLeft, 2450);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 2451);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 2601);
setTimeout(axeBowProtrudingFlyingFireworks_13NpcLeft, 2750);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 2751);
setTimeout(axeBowProtrudingFlyingFireworks_14NpcLeft, 3050);
setTimeout(axeBowProtrudingFlyingFireworks_15NpcLeft, 3350);
setTimeout(axeBowFireworkExplodesNpcDefendedLeft, 3650);
setTimeout(axeBowFireworkDisplays_0NpcDefendedLeft, 3850);
setTimeout(axeBowFireworkDisplays_1NpcDefendedLeft, 3925);
setTimeout(axeBowFireworkDisplays_2NpcDefendedLeft, 4000);
setTimeout(greyWizPcRestsArmLeft, 4001);
setTimeout(axeBowFireworkDisplays_3NpcDefendedLeft, 4075);
setTimeout(axeBowFireworkDisplays_4NpcDefendedLeft, 4150);
setTimeout(axeBowFireworkDisplays_5NpcDefendedLeft, 4230);
setTimeout(axeBowFireworkDisplays_6NpcDefendedLeft, 4310);
setTimeout(axeBowFireworkDisplays_7NpcDefendedLeft, 4390);
setTimeout(axeBowFireworkDisplays_8NpcDefendedLeft, 4480);
setTimeout(axeBowFireworkDisplays_9NpcDefendedLeft, 4570);
setTimeout(axeBowFireworkDisplays_10NpcDefendedLeft, 4660);
setTimeout(axeBowFireworkDisplays_11NpcDefendedLeft, 4910);
setTimeout(axeBowFireworkDisplays_12NpcDefendedLeft, 5160);
setTimeout(axeBowFireworkDisplays_13NpcDefendedLeft, 5410);
setTimeout(axeBowFireworkDisplays_14NpcDefendedLeft, 5660);
setTimeout(axeBowFireworkDisplays_15NpcDefendedLeft, 5910);
setTimeout(cleanSceneOfGreyPc, 6010);
setTimeout(cleanSceneOfGreyNpc, 6011);

//greyPcAttackRightGreyNpcDefendRight axeSword

setTimeout(greyWizPcBackground, 6111+1);
setTimeout(setSceneWithGreyPc, 6111+2);
setTimeout(setSceneWithGreyNpc, 6111+3);
setTimeout(greyWizNpcDefendsRight, 6111+200);
setTimeout(greyWizArmPcRotationForAttack_0Right, 6111+350);
setTimeout(greyWizArmPcRotationForAttack_1Right, 6111+500);
setTimeout(greyWizArmPcRotationForAttack_2Right, 6111+650);
setTimeout(axeSwordProtrudingFlyingFireworks_0PcRight, 6111+750);
setTimeout(axeSwordProtrudingFlyingFireworks_1PcRight, 6111+870);
setTimeout(axeSwordProtrudingFlyingFireworks_2PcRight, 6111+990);
setTimeout(axeSwordProtrudingFlyingFireworks_3PcRight, 6111+1110);
setTimeout(axeSwordProtrudingFlyingFireworks_4PcRight, 6111+1150);
setTimeout(axeSwordProtrudingFlyingFireworks_5PcRight, 6111+1250);
setTimeout(axeSwordProtrudingFlyingFireworks_6PcRight, 6111+1350);
setTimeout(axeSwordProtrudingFlyingFireworks_7PcRight, 6111+1450);
setTimeout(axeSwordProtrudingFlyingFireworks_8PcRight, 6111+1550);
setTimeout(axeSwordProtrudingFlyingFireworks_9PcRight, 6111+1750);
setTimeout(axeSwordProtrudingFlyingFireworks_10PcRight, 6111+1950);
setTimeout(axeSwordProtrudingFlyingFireworks_11PcRight, 6111+2200);
setTimeout(axeSwordProtrudingFlyingFireworks_12PcRight, 6111+2450);
setTimeout(greyWizArmPcRotationBackFromAttack_0Right, 6111+2451);
setTimeout(greyWizArmPcRotationBackFromAttack_1Right, 6111+2601);
setTimeout(axeSwordProtrudingFlyingFireworks_13PcRight, 6111+2750);
setTimeout(greyWizArmPcRotationBackFromAttack_2Right, 6111+2751);
setTimeout(axeSwordProtrudingFlyingFireworks_14PcRight, 6111+3050);
setTimeout(axeSwordProtrudingFlyingFireworks_15PcRight, 6111+3350);
setTimeout(axeSwordFireworkExplodesPcDefendedRight, 6111+3650);
setTimeout(axeSwordFireworkDisplays_0PcDefendedRight, 6111+3850);
setTimeout(axeSwordFireworkDisplays_1PcDefendedRight, 6111+3925);
setTimeout(axeSwordFireworkDisplays_2PcDefendedRight, 6111+4000);
setTimeout(greyWizNpcRestsArmRight, 6111+4001);
setTimeout(axeSwordFireworkDisplays_3PcDefendedRight, 6111+4075);
setTimeout(axeSwordFireworkDisplays_4PcDefendedRight, 6111+4150);
setTimeout(axeSwordFireworkDisplays_5PcDefendedRight, 6111+4230);
setTimeout(axeSwordFireworkDisplays_6PcDefendedRight, 6111+4310);
setTimeout(axeSwordFireworkDisplays_7PcDefendedRight, 6111+4390);
setTimeout(axeSwordFireworkDisplays_8PcDefendedRight, 6111+4480);
setTimeout(axeSwordFireworkDisplays_9PcDefendedRight, 6111+4570);
setTimeout(axeSwordFireworkDisplays_10PcDefendedRight, 6111+4660);
setTimeout(axeSwordFireworkDisplays_11PcDefendedRight, 6111+4910);
setTimeout(axeSwordFireworkDisplays_12PcDefendedRight, 6111+5160);
setTimeout(axeSwordFireworkDisplays_13PcDefendedRight, 6111+5410);
setTimeout(axeSwordFireworkDisplays_14PcDefendedRight, 6111+5660);
setTimeout(axeSwordFireworkDisplays_15PcDefendedRight, 6111+5910);
setTimeout(cleanSceneOfGreyPc, 6111+6010);
setTimeout(cleanSceneOfGreyNpc, 6111+6011);

//greyPcDefendRightGreyNpcAttackRight bowSword

setTimeout(greyWizPcBackground, 12122+1);
setTimeout(setSceneWithGreyPc, 12122+2);
setTimeout(setSceneWithGreyNpc, 12122+3);
setTimeout(greyWizPcDefendsRight, 12122+200);
setTimeout(greyWizArmNpcRotationForAttack_0Right, 12122+350);
setTimeout(greyWizArmNpcRotationForAttack_1Right, 12122+500);
setTimeout(greyWizArmNpcRotationForAttack_2Right, 12122+650);
setTimeout(bowSwordProtrudingFlyingFireworks_0NpcRight, 12122+750);
setTimeout(bowSwordProtrudingFlyingFireworks_1NpcRight, 12122+870);
setTimeout(bowSwordProtrudingFlyingFireworks_2NpcRight, 12122+990);
setTimeout(bowSwordProtrudingFlyingFireworks_3NpcRight, 12122+1110);
setTimeout(bowSwordProtrudingFlyingFireworks_4NpcRight, 12122+1150);
setTimeout(bowSwordProtrudingFlyingFireworks_5NpcRight, 12122+1250);
setTimeout(bowSwordProtrudingFlyingFireworks_6NpcRight, 12122+1350);
setTimeout(bowSwordProtrudingFlyingFireworks_7NpcRight, 12122+1450);
setTimeout(bowSwordProtrudingFlyingFireworks_8NpcRight, 12122+1550);
setTimeout(bowSwordProtrudingFlyingFireworks_9NpcRight, 12122+1750);
setTimeout(bowSwordProtrudingFlyingFireworks_10NpcRight, 12122+1950);
setTimeout(bowSwordProtrudingFlyingFireworks_11NpcRight, 12122+2200);
setTimeout(bowSwordProtrudingFlyingFireworks_12NpcRight, 12122+2450);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Right, 12122+2451);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Right, 12122+2601);
setTimeout(bowSwordProtrudingFlyingFireworks_13NpcRight, 12122+2750);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Right, 12122+2751);
setTimeout(bowSwordProtrudingFlyingFireworks_14NpcRight, 12122+3050);
setTimeout(bowSwordProtrudingFlyingFireworks_15NpcRight, 12122+3350);
setTimeout(bowSwordFireworkExplodesNpcDefendedRight, 12122+3650);
setTimeout(bowSwordFireworkDisplays_0NpcDefendedRight, 12122+3850);
setTimeout(bowSwordFireworkDisplays_1NpcDefendedRight, 12122+3925);
setTimeout(bowSwordFireworkDisplays_2NpcDefendedRight, 12122+4000);
setTimeout(greyWizPcRestsArmRight, 12122+4001);
setTimeout(bowSwordFireworkDisplays_3NpcDefendedRight, 12122+4075);
setTimeout(bowSwordFireworkDisplays_4NpcDefendedRight, 12122+4150);
setTimeout(bowSwordFireworkDisplays_5NpcDefendedRight, 12122+4230);
setTimeout(bowSwordFireworkDisplays_6NpcDefendedRight, 12122+4310);
setTimeout(bowSwordFireworkDisplays_7NpcDefendedRight, 12122+4390);
setTimeout(bowSwordFireworkDisplays_8NpcDefendedRight, 12122+4480);
setTimeout(bowSwordFireworkDisplays_9NpcDefendedRight, 12122+4570);
setTimeout(bowSwordFireworkDisplays_10NpcDefendedRight, 12122+4660);
setTimeout(bowSwordFireworkDisplays_11NpcDefendedRight, 12122+4910);
setTimeout(bowSwordFireworkDisplays_12NpcDefendedRight, 12122+5160);
setTimeout(bowSwordFireworkDisplays_13NpcDefendedRight, 12122+5410);
setTimeout(bowSwordFireworkDisplays_14NpcDefendedRight, 12122+5660);
setTimeout(bowSwordFireworkDisplays_15NpcDefendedRight, 12122+5910);
setTimeout(cleanSceneOfGreyPc, 12122+6010);
setTimeout(cleanSceneOfGreyNpc, 12122+6011);

//greyPcAttackLeftGreyNpcDefendLeft axeBowSword

setTimeout(greyWizPcBackground, 18233+1);
setTimeout(setSceneWithGreyPc, 18233+2);
setTimeout(setSceneWithGreyNpc, 18233+3);
setTimeout(greyWizNpcDefendsLeft, 18233+200);
setTimeout(greyWizArmPcRotationForAttack_0Left, 18233+350);
setTimeout(greyWizArmPcRotationForAttack_1Left, 18233+500);
setTimeout(greyWizArmPcRotationForAttack_2Left, 18233+650);
setTimeout(axeBowSwordProtrudingFlyingFireworks_0PcLeft, 18233+750);
setTimeout(axeBowSwordProtrudingFlyingFireworks_1PcLeft, 18233+870);
setTimeout(axeBowSwordProtrudingFlyingFireworks_2PcLeft, 18233+990);
setTimeout(axeBowSwordProtrudingFlyingFireworks_3PcLeft, 18233+1110);
setTimeout(axeBowSwordProtrudingFlyingFireworks_4PcLeft, 18233+1150);
setTimeout(axeBowSwordProtrudingFlyingFireworks_5PcLeft, 18233+1250);
setTimeout(axeBowSwordProtrudingFlyingFireworks_6PcLeft, 18233+1350);
setTimeout(axeBowSwordProtrudingFlyingFireworks_7PcLeft, 18233+1450);
setTimeout(axeBowSwordProtrudingFlyingFireworks_8PcLeft, 18233+1550);
setTimeout(axeBowSwordProtrudingFlyingFireworks_9PcLeft, 18233+1750);
setTimeout(axeBowSwordProtrudingFlyingFireworks_10PcLeft, 18233+1950);
setTimeout(axeBowSwordProtrudingFlyingFireworks_11PcLeft, 18233+2200);
setTimeout(axeBowSwordProtrudingFlyingFireworks_12PcLeft, 18233+2450);
setTimeout(greyWizArmPcRotationBackFromAttack_0Left, 18233+2451);
setTimeout(greyWizArmPcRotationBackFromAttack_1Left, 18233+2601);
setTimeout(axeBowSwordProtrudingFlyingFireworks_13PcLeft, 18233+2750);
setTimeout(greyWizArmPcRotationBackFromAttack_2Left, 18233+2751);
setTimeout(axeBowSwordProtrudingFlyingFireworks_14PcLeft, 18233+3050);
setTimeout(axeBowSwordProtrudingFlyingFireworks_15PcLeft, 18233+3350);
setTimeout(axeBowSwordFireworkExplodesPcDefendedLeft, 18233+3650);
setTimeout(axeBowSwordFireworkDisplays_0PcDefendedLeft, 18233+3850);
setTimeout(axeBowSwordFireworkDisplays_1PcDefendedLeft, 18233+3925);
setTimeout(axeBowSwordFireworkDisplays_2PcDefendedLeft, 18233+4000);
setTimeout(greyWizNpcRestsArmLeft, 18233+4001);
setTimeout(axeBowSwordFireworkDisplays_3PcDefendedLeft, 18233+4075);
setTimeout(axeBowSwordFireworkDisplays_4PcDefendedLeft, 18233+4150);
setTimeout(axeBowSwordFireworkDisplays_5PcDefendedLeft, 18233+4230);
setTimeout(axeBowSwordFireworkDisplays_6PcDefendedLeft, 18233+4310);
setTimeout(axeBowSwordFireworkDisplays_7PcDefendedLeft, 18233+4390);
setTimeout(axeBowSwordFireworkDisplays_8PcDefendedLeft, 18233+4480);
setTimeout(axeBowSwordFireworkDisplays_9PcDefendedLeft, 18233+4570);
setTimeout(axeBowSwordFireworkDisplays_10PcDefendedLeft, 18233+4660);
setTimeout(axeBowSwordFireworkDisplays_11PcDefendedLeft, 18233+4910);
setTimeout(axeBowSwordFireworkDisplays_12PcDefendedLeft, 18233+5160);
setTimeout(axeBowSwordFireworkDisplays_13PcDefendedLeft, 18233+5410);
setTimeout(axeBowSwordFireworkDisplays_14PcDefendedLeft, 18233+5660);
setTimeout(axeBowSwordFireworkDisplays_15PcDefendedLeft, 18233+5910);
setTimeout(cleanSceneOfGreyPc, 18233+6010);
setTimeout(cleanSceneOfGreyNpc, 18233+6011);

//greyPcDefendLeftGreyNpcAttackLeft axe

setTimeout(greyWizPcBackground, 24344+1);
setTimeout(setSceneWithGreyPc, 24344+2);
setTimeout(setSceneWithGreyNpc, 24344+3);
setTimeout(greyWizPcDefendsLeft, 24344+200);
setTimeout(greyWizArmNpcRotationForAttack_0Left, 24344+350);
setTimeout(greyWizArmNpcRotationForAttack_1Left, 24344+500);
setTimeout(greyWizArmNpcRotationForAttack_2Left, 24344+650);
setTimeout(axeProtrudingFlyingFireworks_0NpcLeft, 24344+750);
setTimeout(axeProtrudingFlyingFireworks_1NpcLeft, 24344+870);
setTimeout(axeProtrudingFlyingFireworks_2NpcLeft, 24344+990);
setTimeout(axeProtrudingFlyingFireworks_3NpcLeft, 24344+1110);
setTimeout(axeProtrudingFlyingFireworks_4NpcLeft, 24344+1150);
setTimeout(axeProtrudingFlyingFireworks_5NpcLeft, 24344+1250);
setTimeout(axeProtrudingFlyingFireworks_6NpcLeft, 24344+1350);
setTimeout(axeProtrudingFlyingFireworks_7NpcLeft, 24344+1450);
setTimeout(axeProtrudingFlyingFireworks_8NpcLeft, 24344+1550);
setTimeout(axeProtrudingFlyingFireworks_9NpcLeft, 24344+1750);
setTimeout(axeProtrudingFlyingFireworks_10NpcLeft, 24344+1950);
setTimeout(axeProtrudingFlyingFireworks_11NpcLeft, 24344+2200);
setTimeout(axeProtrudingFlyingFireworks_12NpcLeft, 24344+2450);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Left, 24344+2451);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Left, 24344+2601);
setTimeout(axeProtrudingFlyingFireworks_13NpcLeft, 24344+2750);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Left, 24344+2751);
setTimeout(axeProtrudingFlyingFireworks_14NpcLeft, 24344+3050);
setTimeout(axeProtrudingFlyingFireworks_15NpcLeft, 24344+3350);
setTimeout(axeFireworkExplodesNpcDefendedLeft, 24344+3650);
setTimeout(axeFireworkDisplays_0NpcDefendedLeft, 24344+3850);
setTimeout(axeFireworkDisplays_1NpcDefendedLeft, 24344+3925);
setTimeout(axeFireworkDisplays_2NpcDefendedLeft, 24344+4000);
setTimeout(greyWizPcRestsArmLeft, 24344+4001);
setTimeout(axeFireworkDisplays_3NpcDefendedLeft, 24344+4075);
setTimeout(axeFireworkDisplays_4NpcDefendedLeft, 24344+4150);
setTimeout(axeFireworkDisplays_5NpcDefendedLeft, 24344+4230);
setTimeout(axeFireworkDisplays_6NpcDefendedLeft, 24344+4310);
setTimeout(axeFireworkDisplays_7NpcDefendedLeft, 24344+4390);
setTimeout(axeFireworkDisplays_8NpcDefendedLeft, 24344+4480);
setTimeout(axeFireworkDisplays_9NpcDefendedLeft, 24344+4570);
setTimeout(axeFireworkDisplays_10NpcDefendedLeft, 24344+4660);
setTimeout(axeFireworkDisplays_11NpcDefendedLeft, 24344+4910);
setTimeout(axeFireworkDisplays_12NpcDefendedLeft, 24344+5160);
setTimeout(axeFireworkDisplays_13NpcDefendedLeft, 24344+5410);
setTimeout(axeFireworkDisplays_14NpcDefendedLeft, 24344+5660);
setTimeout(axeFireworkDisplays_15NpcDefendedLeft, 24344+5910);
setTimeout(cleanSceneOfGreyPc, 24344+6010);
setTimeout(cleanSceneOfGreyNpc, 24344+6011);

//greyPcAttackRightGreyNpcDefendRight bow

setTimeout(greyWizPcBackground, 30455+1);
setTimeout(setSceneWithGreyPc, 30455+2);
setTimeout(setSceneWithGreyNpc, 30455+3);
setTimeout(greyWizNpcDefendsRight, 30455+200);
setTimeout(greyWizArmPcRotationForAttack_0Right, 30455+350);
setTimeout(greyWizArmPcRotationForAttack_1Right, 30455+500);
setTimeout(greyWizArmPcRotationForAttack_2Right, 30455+650);
setTimeout(bowProtrudingFlyingFireworks_0PcRight, 30455+750);
setTimeout(bowProtrudingFlyingFireworks_1PcRight, 30455+870);
setTimeout(bowProtrudingFlyingFireworks_2PcRight, 30455+990);
setTimeout(bowProtrudingFlyingFireworks_3PcRight, 30455+1110);
setTimeout(bowProtrudingFlyingFireworks_4PcRight, 30455+1150);
setTimeout(bowProtrudingFlyingFireworks_5PcRight, 30455+1250);
setTimeout(bowProtrudingFlyingFireworks_6PcRight, 30455+1350);
setTimeout(bowProtrudingFlyingFireworks_7PcRight, 30455+1450);
setTimeout(bowProtrudingFlyingFireworks_8PcRight, 30455+1550);
setTimeout(bowProtrudingFlyingFireworks_9PcRight, 30455+1750);
setTimeout(bowProtrudingFlyingFireworks_10PcRight, 30455+1950);
setTimeout(bowProtrudingFlyingFireworks_11PcRight, 30455+2200);
setTimeout(bowProtrudingFlyingFireworks_12PcRight, 30455+2450);
setTimeout(greyWizArmPcRotationBackFromAttack_0Right, 30455+2451);
setTimeout(greyWizArmPcRotationBackFromAttack_1Right, 30455+2601);
setTimeout(bowProtrudingFlyingFireworks_13PcRight, 30455+2750);
setTimeout(greyWizArmPcRotationBackFromAttack_2Right, 30455+2751);
setTimeout(bowProtrudingFlyingFireworks_14PcRight, 30455+3050);
setTimeout(bowProtrudingFlyingFireworks_15PcRight, 30455+3350);
setTimeout(bowFireworkExplodesPcDefendedRight, 30455+3650);
setTimeout(bowFireworkDisplays_0PcDefendedRight, 30455+3850);
setTimeout(bowFireworkDisplays_1PcDefendedRight, 30455+3925);
setTimeout(bowFireworkDisplays_2PcDefendedRight, 30455+4000);
setTimeout(greyWizNpcRestsArmRight, 30455+4001);
setTimeout(bowFireworkDisplays_3PcDefendedRight, 30455+4075);
setTimeout(bowFireworkDisplays_4PcDefendedRight, 30455+4150);
setTimeout(bowFireworkDisplays_5PcDefendedRight, 30455+4230);
setTimeout(bowFireworkDisplays_6PcDefendedRight, 30455+4310);
setTimeout(bowFireworkDisplays_7PcDefendedRight, 30455+4390);
setTimeout(bowFireworkDisplays_8PcDefendedRight, 30455+4480);
setTimeout(bowFireworkDisplays_9PcDefendedRight, 30455+4570);
setTimeout(bowFireworkDisplays_10PcDefendedRight, 30455+4660);
setTimeout(bowFireworkDisplays_11PcDefendedRight, 30455+4910);
setTimeout(bowFireworkDisplays_12PcDefendedRight, 30455+5160);
setTimeout(bowFireworkDisplays_13PcDefendedRight, 30455+5410);
setTimeout(bowFireworkDisplays_14PcDefendedRight, 30455+5660);
setTimeout(bowFireworkDisplays_15PcDefendedRight, 30455+5910);
setTimeout(cleanSceneOfGreyPc, 30455+6010);
setTimeout(cleanSceneOfGreyNpc, 30455+6011);

//greyPcDefendRightGreyNpcAttackRight sword

setTimeout(greyWizPcBackground, 36566+1);
setTimeout(setSceneWithGreyPc, 36566+2);
setTimeout(setSceneWithGreyNpc, 36566+3);
setTimeout(greyWizPcDefendsRight, 36566+200);
setTimeout(greyWizArmNpcRotationForAttack_0Right, 36566+350);
setTimeout(greyWizArmNpcRotationForAttack_1Right, 36566+500);
setTimeout(greyWizArmNpcRotationForAttack_2Right, 36566+650);
setTimeout(swordProtrudingFlyingFireworks_0NpcRight, 36566+750);
setTimeout(swordProtrudingFlyingFireworks_1NpcRight, 36566+870);
setTimeout(swordProtrudingFlyingFireworks_2NpcRight, 36566+990);
setTimeout(swordProtrudingFlyingFireworks_3NpcRight, 36566+1110);
setTimeout(swordProtrudingFlyingFireworks_4NpcRight, 36566+1150);
setTimeout(swordProtrudingFlyingFireworks_5NpcRight, 36566+1250);
setTimeout(swordProtrudingFlyingFireworks_6NpcRight, 36566+1350);
setTimeout(swordProtrudingFlyingFireworks_7NpcRight, 36566+1450);
setTimeout(swordProtrudingFlyingFireworks_8NpcRight, 36566+1550);
setTimeout(swordProtrudingFlyingFireworks_9NpcRight, 36566+1750);
setTimeout(swordProtrudingFlyingFireworks_10NpcRight, 36566+1950);
setTimeout(swordProtrudingFlyingFireworks_11NpcRight, 36566+2200);
setTimeout(swordProtrudingFlyingFireworks_12NpcRight, 36566+2450);
setTimeout(greyWizArmNpcRotationBackFromAttack_0Right, 36566+2451);
setTimeout(greyWizArmNpcRotationBackFromAttack_1Right, 36566+2601);
setTimeout(swordProtrudingFlyingFireworks_13NpcRight, 36566+2750);
setTimeout(greyWizArmNpcRotationBackFromAttack_2Right, 36566+2751);
setTimeout(swordProtrudingFlyingFireworks_14NpcRight, 36566+3050);
setTimeout(swordProtrudingFlyingFireworks_15NpcRight, 36566+3350);
setTimeout(swordFireworkExplodesNpcDefendedRight, 36566+3650);
setTimeout(swordFireworkDisplays_0NpcDefendedRight, 36566+3850);
setTimeout(swordFireworkDisplays_1NpcDefendedRight, 36566+3925);
setTimeout(swordFireworkDisplays_2NpcDefendedRight, 36566+4000);
setTimeout(greyWizPcRestsArmRight, 36566+4001);
setTimeout(swordFireworkDisplays_3NpcDefendedRight, 36566+4075);
setTimeout(swordFireworkDisplays_4NpcDefendedRight, 36566+4150);
setTimeout(swordFireworkDisplays_5NpcDefendedRight, 36566+4230);
setTimeout(swordFireworkDisplays_6NpcDefendedRight, 36566+4310);
setTimeout(swordFireworkDisplays_7NpcDefendedRight, 36566+4390);
setTimeout(swordFireworkDisplays_8NpcDefendedRight, 36566+4480);
setTimeout(swordFireworkDisplays_9NpcDefendedRight, 36566+4570);
setTimeout(swordFireworkDisplays_10NpcDefendedRight, 36566+4660);
setTimeout(swordFireworkDisplays_11NpcDefendedRight, 36566+4910);
setTimeout(swordFireworkDisplays_12NpcDefendedRight, 36566+5160);
setTimeout(swordFireworkDisplays_13NpcDefendedRight, 36566+5410);
setTimeout(swordFireworkDisplays_14NpcDefendedRight, 36566+5660);
setTimeout(swordFireworkDisplays_15NpcDefendedRight, 36566+5910);
setTimeout(cleanSceneOfGreyPc, 36566+6010);
setTimeout(cleanSceneOfGreyNpc, 36566+6011);