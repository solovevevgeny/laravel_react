<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Engines;


class EnginesController extends Controller{
	public function index(){
		return Engines::all();
	}
	public function roots(){
		return Engines::where('parent_id','=','0')->get();
	}


}
