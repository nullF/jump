var game = new Game()
game.init()
game.addSuccessFn(success)
game.addFailedFn(failed)

var mask = document.querySelector('.mask')
var restartButton = document.querySelector('.restart')
var score = document.querySelector('.score')

restartButton.addEventListener('click', restart)

// 游戏重新开始，执行函数
function restart () {
	mask.style.display = 'none'
	game.restart()
}
// 游戏失败执行函数
function failed(){
	score.innerText = game.score
	mask.style.display = 'flex'
}
// 游戏成功，更新分数
function success (score) {
	var scoreCurrent = document.querySelector('.score-current')
	scoreCurrent.innerText = score
}

function audioBgm() {
	var bgm = new Audio('./src/bgm.mp3');
	bgm.volume = .05
	bgm.play();
	return bgm;
}
var bgm = audioBgm();

var ActMusic = new Audio('./src/jump.mp3');
ActMusic.volume = .05;
ActMusic.loop = false;

var FallMusic = new Audio('./src/fall.mp3');
FallMusic.volume = .05;
FallMusic.loop = false;
