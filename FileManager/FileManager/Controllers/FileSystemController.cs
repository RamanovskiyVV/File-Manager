using FileManager.Infrastructure;
using FileManager.IServices;
using FileManager.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Unity;
using Unity.Attributes;

namespace FileManager.Controllers
{
	/// <summary>
	/// File System Controller
	/// </summary>
	public class FileSystemController : Controller
	{
		#region const
		const string directory = "directory";
		#endregion

		/// <summary>
		/// properties
		/// </summary>
		public IDirectoryService DirectoryService { get; set; }
		public IFileService FileService { get; set; }
		public IDriveService DriveService { get; set; }

		/// <summary>
		/// construcktor
		/// </summary>
		public FileSystemController() : base()
		{
			DirectoryService = UnityDI.DiContainer.Resolve<IDirectoryService>();
			FileService = UnityDI.DiContainer.Resolve<IFileService>();
			DriveService = UnityDI.DiContainer.Resolve<IDriveService>();
		}

		/// <summary>
		/// Shows file tree
		/// </summary>
		/// <returns></returns>
		public ActionResult GoToSystem()
		{
			return View();
		}

		/// <summary>
		/// Get Directories List
		/// </summary>
		/// <param name="directory"></param>
		/// <returns></returns>
		public JsonResult GetDirectoriesList(string directory)
		{
			if (!string.IsNullOrWhiteSpace(directory))
			{
				string[] innerList = DirectoryService.GetDirectoriesList(directory);
				string result = JsonConvert.SerializeObject(innerList);
				return Json(innerList, JsonRequestBehavior.AllowGet);
			}
			return null;
		}

		/// <summary>
		/// Get Files List
		/// </summary>
		/// <param name="directory"></param>
		/// <returns></returns>
		public JsonResult GetFilesList(string directory)
		{
			if (!string.IsNullOrWhiteSpace(directory))
			{
				string[] innerList = FileService.GetFilesList(directory);
				string result = JsonConvert.SerializeObject(innerList);
				return Json(innerList, JsonRequestBehavior.AllowGet);
			}
			return null;

		}

		/// <summary>
		/// Get Drives
		/// </summary>
		/// <returns></returns>
		public JsonResult GetDrives()
		{
			string[] drives = DriveService.GetDrives();
			string result = JsonConvert.SerializeObject(drives);
			return Json(drives, JsonRequestBehavior.AllowGet);
		}

		/// <summary>
		/// trigers opening File
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		public EmptyResult Open(string path)
		{
			if (!string.IsNullOrWhiteSpace(path))
			{
				this.FileService.Open(path);
			}
			return new EmptyResult();
		}

		/// <summary>
		/// delete File
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		[Authorize(Roles = "admin")]
		public EmptyResult Delete(string path, string type)
		{
			if (string.IsNullOrWhiteSpace(path) || string.IsNullOrWhiteSpace(type))
			{
				return new EmptyResult();
			}

			if (this.DirectoryService.IsDirectoryType(type))
			{
				this.DirectoryService.Delete(path);
			}
			else
			{
				this.FileService.Delete(path);
			}

			return new EmptyResult();
		}

		/// <summary>
		/// Create new folder
		/// </summary>
		/// <param name="path"></param>
		/// <returns></returns>
		[Authorize(Roles = "admin")]
		public EmptyResult Create(string path, string type)
		{
			if (string.IsNullOrWhiteSpace(path) || string.IsNullOrWhiteSpace(type))
			{
				return new EmptyResult();
			}

			if (this.DirectoryService.IsDirectoryType(type))
			{
				this.DirectoryService.Create(path);
			}
			else
			{
				this.FileService.Create(path);
			}

			return new EmptyResult();
		}
	}
}