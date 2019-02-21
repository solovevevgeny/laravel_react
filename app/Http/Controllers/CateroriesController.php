<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;



class CateroriesController extends Controller{
	public function index(){
		return Category::all();
	}
}
