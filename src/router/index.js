/**
 * Time:2022/6/8 11:07 53
 * Name:index.js
 * Path:app/src/router
 * ProjectName:新建文件夹
 * Author:lenovo
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import One from '@/page/one'
import Two from '@/page/two'

import siyi from '@/index/siyi'
import sier from '@/index/sier'
import two from '@/page/two'
import one from '@/page/one'

export default new VueRouter ({
	routes: [
		{
			path: '/hello-world',
			component: HelloWorld,
			children: [
				{
					path: 'one',
					component: One,
				},
				{
					path: 'two',
					component: Two,
				},
			],
		},
	],
})
