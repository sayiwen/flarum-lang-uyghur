<?php

use Sayiwen\FlarumLangUyghur\Listener\ChangeDirection;

return [
	new Flarum\Extend\LanguagePack(),
	(new Flarum\Extend\Frontend('forum'))
		->js(__DIR__.'/js/dist/forum.js')
		->css(__DIR__ . '/less/forum.less')
		->content(ChangeDirection::class),
];
