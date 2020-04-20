import React from 'react'

export default function componentName()  {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary pl-5">
  <a class="navbar-brand" href="#">FD-TECHNOLOGIES</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ml-3" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
    {/* float-right */}
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
    
  </div>
</nav>
            </div>
        )
    }
